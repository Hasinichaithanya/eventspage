// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />{" "}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
