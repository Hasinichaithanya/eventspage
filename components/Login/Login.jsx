import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "../SignUp/signup.css";
const Login = () => {
  const [user, setUser] = useState({
    mail: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loginMsg, setLoginMsg] = useState("");
  const navigate = useNavigate();
  const validateForm = () => {
    const newErrors = {};
    if (!user.mail) {
      newErrors.mail = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(user.mail)) {
      newErrors.mail = "Email address is invalid.";
    }
    if (!user.password) newErrors.password = "Password is required.";
    if (user.password.length < 8)
      newErrors.password = "Password must be atleast 8 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const object = {
      mail: user.mail,
      password: user.password,
    };
    console.log(object);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    };

    try {
      const response = await fetch(
        "https://n-usersapi.onrender.com/login",
        options
      );
      const result = await response.json();
      console.log(result);
      if (result.code === 200) {
        Cookies.set("userLoggedIn", true, {
          expires: 10,
        });
        navigate("/");
      } else {
        console.error("Login failed:", result.message);
        setLoginMsg(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors("Login Failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="form-container login-container">
      <h2>Login</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-input-container">
          <label id="mail">E-mail:</label>
          <input
            type="email"
            name="mail"
            placeholder="Email"
            value={user.mail}
            onChange={handleChange}
          />{" "}
          {errors.mail && <span className="err-msg">*{errors.mail}</span>}
        </div>{" "}
        <div className="signup-input-container">
          <label id="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />{" "}
          {errors.password && (
            <span className="err-msg">*{errors.password}</span>
          )}
        </div>{" "}
        <button type="submit">Login</button>
      </form>
      {loginMsg && <span className="err-msg">*{loginMsg}</span>}{" "}
    </div>
  );
};

export default Login;
