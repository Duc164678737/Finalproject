import React, { useState } from "react";
import anh16 from "../assest/a16.png";
import anh17 from "../assest/a17.png";


const TimePicker = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);

  const handleShowMore = () => {
    setHide(!hide);
  };

  const handleShowMore2 = () => {
    setHide2(!hide2);
  };

  return (
    <div className="system-intro">
      <div className="title">TimePicker</div>
      <div>The time picker is used to select time.</div>

      <div className="margin-top-40 usage">Basic Usage</div>
      <div>Let the user pick a specific time point.</div>
      <div className="border-radius-1 padding-24">Home</div>
      {hide && <img src={anh16} alt="anh16" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Interval</div>
      <div>Let the user pick a time from the list, the min-unit is 5-min.</div>
      <div className="border-radius-1 padding-24">Interval</div>
      {hide2 && <img src={anh17} alt="anh17" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore2}
      >
        {!hide2 ? "More" : "Less"}
      </button>
    </div>
  );
};

export default TimePicker;
