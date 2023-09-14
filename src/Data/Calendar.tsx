import React, { useState } from "react";
import anh17 from "../assest/a17.png";
import  anh30 from "../assest/a30.png";


const Calendar = () => {
  const [hide, setHide] = useState(false);

  const handleShowMore = () => {
    setHide(!hide);
  };

  return (
    <div className="system-intro">
      <div className="title">Calendar</div>
      <div>
        The calendar control lets people view events by month/week/day view.
        Currently only month view is supported.
      </div>

      <div className="margin-top-40 usage">Basic Usage</div>
      <div>
        Display daily events, jobs, or courses, users can switch to the
        previous/next month by clicking the arrow button. Click the "Today"
        button to quickly get back to today. Can show x events in a day area at
        most and click "N more" to show more in the flyout.
      </div>
      <div className="border-radius-1 padding-24">
      <img src={anh30} alt="anh30" />
      </div>
      {hide && <img src={anh17} alt="anh16" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
    </div>
  );
};

export default Calendar;
