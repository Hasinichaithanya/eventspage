// import "./App.css";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Recommended from "../components/Recommended/Recommended";

import Upcoming from "../components/Upcoming/Upcoming";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Recommended />
      <Upcoming />
    </>
  );
}

export default App;
