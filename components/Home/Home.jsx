import Recommended from "../Recommended/Recommended";
import Upcoming from "../Upcoming/Upcoming";
import "./home.css";
function Home() {
  return (
    <div>
      <div className="home-container">
        <h1 className="home-main-heading">
          Discover Exciting Events Happening Near You - Stay Tuned For Updates!{" "}
        </h1>
        <p>
          Dorem ipsum dolor sit amet, consecuter adipiscing elit. Nunc vulputate
          libero et velit interdum, ac oliquit odio mattis. Class aptent taciti
          sociosqu ad litora torquent per conubia nostria, per
        </p>
      </div>
      <Recommended />
      <Upcoming />
    </div>
  );
}
export default Home;
