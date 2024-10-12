import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import UpcomingEventCard from "../UpcomingEventCard/UpcomingEventCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuidv4 } from "uuid";

import "./upcoming.css";

function Upcoming() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    console.log("useEffect called", page);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`
        );
        const data = await response.json();
        setUpcomingEvents((prev) => [...prev, ...data.events]);
        setIsLoading(false);
        setHasMore(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, [page]);

  const fetchMoreData = () => {
    if (upcomingEvents.length === 44) {
      setHasMore(false);
    } else if (!isLoading && hasMore) {
      setPage((prev) => prev + 1);
    }
    console.log("Hi");
  };
  console.log(upcomingEvents);
  return (
    <div className="upcoming-events-container">
      <div className="upcoming-heading-container">
        <span className="upcoming">
          Upcoming Shows
          <FaArrowRightLong />
        </span>
        <button>See all</button>
      </div>
      <InfiniteScroll
        dataLength={upcomingEvents.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center", marginTop: "100px" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        className="upcoming-events"
      >
        {upcomingEvents.map((event) => (
          <UpcomingEventCard event={event} key={uuidv4()} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Upcoming;
