import React, { useState } from "react";
import anh10 from "../assest/a10.png";
import anh11 from "../assest/a11.png";
import anh12 from "../assest/a12.png";
import anh13 from "../assest/a13.png";

const DatePicker = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);

  const handleShowMore = () => {
    setHide(!hide);
  };

  const handleShowMore2 = () => {
    setHide2(!hide2);
  };

  const handleShowMore3 = () => {
    setHide3(!hide3);
  };

  const handleShowMore4 = () => {
    setHide4(!hide4);
  };
  return (
    <div className="system-intro">
      <div className="title margin-top-40">DatePicker</div>
      <p>Use DatePicker to perform a specific action.</p>

      <div className="margin-top-40 usage">Basic Usage</div>
      <p>
        A user can choose a specific date using a date picker by clicking the
        calendar icon or just input by themselves.
      </p>
      <div className="border-radius-1 padding-24">Home</div>
      {hide && <img src={anh10} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Date range (Recommended)</div>
      <div>
        A date range allows user to choose a start date from one calendar and
        then choose an end date from another calendar.
      </div>
      <div className="border-radius-1 padding-24">Date range (Recommended)</div>
      {hide2 && <img src={anh11} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore2}
      >
        {!hide2 ? "More" : "Less"}
      </button>

      <div className="margin-top-40 usage">Date range</div>
      <div>
        A date range allows the user to choose a date range from two calendars.
        It lets the user select the same day; the range time will be 00:00 -
        23:59.
      </div>
      <div className="border-radius-1 padding-24">Date rangeu</div>
      {hide3 && <img src={anh12} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore3}
      >
        {!hide3 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">DatePicker with required field</div>
      <div>Validation will happen when the Date Picker loses focus.</div>
      <div className="border-radius-1 padding-24">
        DatePicker with required field
      </div>
      {hide4 && <img src={anh13} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore4}
      >
        {!hide4 ? "More" : "Less"}
      </button>
    </div>
  );
};

export default DatePicker;
