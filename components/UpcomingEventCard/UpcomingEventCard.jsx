/* eslint-disable react/prop-types */
import { TiLocation } from "react-icons/ti";

import "./upcomingCard.css";
import "../RecommendedEventCard/eventCard.css";
const years = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
function UpcomingEventCard(props) {
  const { event } = props;
  // console.log(event);
  const { cityName, date, distanceKm, eventName, imgUrl, weather } = event;
  let idx = imgUrl.split("/d/")[1].split("/view")[0];
  const d = new Date(date);
  const y = d.getFullYear();
  const day = d.getDay();
  const m = d.getMonth();
  return (
    <div className="upcoming-event-card">
      <img
        src={`https://drive.google.com/thumbnail?id=${idx}&sz=w1000`}
        className="upcoming-event-image"
        alt={eventName}
      />
      <span className="time-container">
        {years[m]} {day},{y}
      </span>
      <div className="details-container">
        <div className="upcoming-event-details">
          <span className="make-agree after-note">After note nearly</span>{" "}
        </div>
        <div className="upcoming-event-details">
          <span className="address">
            <TiLocation className="loc-icon" />
            {cityName}
          </span>
          <span className="weather">
            {weather}|{Math.ceil(distanceKm)} km
          </span>
        </div>
      </div>
    </div>
  );
}
export default UpcomingEventCard;
