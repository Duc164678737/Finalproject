import React, { useState } from "react";
import anh17 from "../assest/a17.png";
import { SampleBasic } from "./SampleBasic";

const Filters = () => {
  const [hide, setHide] = useState(false);

  const handleShowMore = () => {
    setHide(!hide);
  };

  return (
    <div className="system-intro">
      <div className="title">Filters</div>
      <div>
        Filters help the user find content easily and make their search for
        information less cumbersome. It is recommended to have a consistent
        behavior across your product. After doing the filter action, it needs a
        specific zone to show what the current filter conditions are, and there
        will be a number indicator on the left of the Filters action.
      </div>

      <div className="margin-top-40 usage">Basic Usage</div>
      <div>
        For some simple cases, you can put them in a popover, and after clicking
        apply will filter the results.
      </div>
      <div className="border-radius-1 padding-24"><SampleBasic/></div>
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

export default Filters;
