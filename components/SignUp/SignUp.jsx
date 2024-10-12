import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./signup.css";
function SignUp() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (name.length < 3) newErrors.name = "Name must be atleast 3 characters";
    if (!mail) {
      newErrors.mail = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(mail)) {
      newErrors.mail = "Email address is invalid.";
    }
    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 8)
      newErrors.password = "Password must be atleast 8 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const user = { name, mail, password };
    console.log(user);

    const options = {
      // mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(
      "https://n-usersapi.onrender.com/add-user",
      options
    );
    const data = await response.json();
    setErrors("");
    console.log(data);
    if (data.Message === "Added successfully") {
      Cookies.set("userLoggedIn", true, {
        expires: 10,
      });

      navigate("/");
    } else {
      console.error("Sign Up failed:", data);
      setErrors("Sign Up failed");
    }
  };
  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-input-container">
          <label id="name">Username:</label>
          <input
            placeholder="Enter your username..."
            type="text"
            htmlFor="name"
            onChange={(e) => setName(e.target.value)}
          />

          {errors.name && <span className="err-msg">*{errors.name}</span>}
        </div>
        <div className="signup-input-container">
          <label id="mail">E-mail:</label>
          <input
            type="email"
            placeholder="Enter your mail..."
            htmlFor="mail"
            onChange={(e) => setMail(e.target.value)}
          />{" "}
          {errors.mail && <span className="err-msg">*{errors.mail}</span>}
        </div>
        <div className="signup-input-container">
          <label id="password">Password:</label>
          <input
            type="password"
            placeholder="Enter your password..."
            htmlFor="password"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          {errors.password && (
            <span className="err-msg">*{errors.password}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
export default SignUp;
