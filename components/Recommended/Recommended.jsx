import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import RecommendedEventCard from "../RecommendedEventCard/RecommendedEventCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./recommended.css";
var settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  speed: 1000,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};
function Recommended() {
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
      );
      const data = await response.json();
      setRecommendedEvents(data.events);
      setIsloading(false);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div className="recommended-events-container">
      <div className="recommended-heading-container">
        <span>
          Recommended Shows
          <FaArrowRightLong />
        </span>
        <button>See all</button>
      </div>
      <div className="slider-container">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <Slider {...settings}>
            {recommendedEvents.map((event) => (
              <RecommendedEventCard event={event} key={event.eventName} />
            ))}
          </Slider>
        )}{" "}
      </div>
    </div>
  );
}
export default Recommended;
