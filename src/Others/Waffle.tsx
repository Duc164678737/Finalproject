import React, { useState } from "react";
import anh17 from "../assest/a17.png";

const Waffle = () => {
  const [hide, setHide] = useState(false);

  const handleShowMore = () => {
    setHide(!hide);
  };

  return (
    <div className="system-intro">
      <div className="title">Waffle</div>
      <div>
        Online products can switch to other products easily. At least there will
        be one product: AOS. Don't display expired products in waffle.
      </div>

      <div className="margin-top-40 usage">Basic Usage</div>
      <div className="border-radius-1 padding-24">Home</div>
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

export default Waffle;
