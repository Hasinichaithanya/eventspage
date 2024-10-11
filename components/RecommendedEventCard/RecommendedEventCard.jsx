import { TiLocation } from "react-icons/ti";
// import "./eventCard.css";
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
function RecommendedEventCard(props) {
  const { event } = props;
  //   console.log(event);
  const { cityName, date, distanceKm, eventName, imgUrl, weather } = event;
  let idx = imgUrl.split("/d/")[1].split("/view")[0];
  const d = new Date(date);
  const y = d.getFullYear();
  const day = d.getDay();
  const m = d.getMonth();
  //   console.log(y, day, m);
  return (
    <div className="recommended-event-card">
      <img
        src={`https://drive.google.com/thumbnail?id=${idx}&sz=w1000`}
        className="event-image"
      />
      <div className="event-details-container">
        <div className="event-details">
          <span className="make-agree">Make Agree</span>{" "}
          <span>
            {years[m]} {day},{y}
          </span>
        </div>
        <div className="event-details">
          {" "}
          <span className="address">
            <TiLocation />
            {cityName}
          </span>
          <span>
            {weather}|{Math.ceil(distanceKm)} km
          </span>
        </div>
      </div>
    </div>
  );
}
export default RecommendedEventCard;
