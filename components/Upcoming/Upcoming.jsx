import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import UpcomingEventCard from "../UpcomingEventCard/UpcomingEventCard";

import "./upcoming.css";

function Upcoming() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming"
      );
      const data = await response.json();
      setUpcomingEvents(data.events);
      setIsloading(false);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div className="upcoming-events-container">
      <div className="upcoming-heading-container">
        <span className="upcoming">
          Upcoming Shows
          <FaArrowRightLong />
        </span>{" "}
        <button>See all</button>
      </div>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="upcoming-events">
          {upcomingEvents.map((event) => (
            <UpcomingEventCard event={event} key={event.eventName} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Upcoming;
