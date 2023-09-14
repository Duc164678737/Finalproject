import React, { useState } from "react";
import anh10 from "../assest/a10.png";
import anh11 from "../assest/a11.png";
import anh12 from "../assest/a12.png";
import anh13 from "../assest/a13.png";
import anh14 from "../assest/a14.png";

const PeoplePicker = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);
  const [hide5, setHide5] = useState(false);

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

  const handleShowMore5 = () => {
    setHide5(!hide5);
  };

  return (
    <div className="system-intro">
      <div className="title margin-top-40">PeoplePicker</div>
      <p>
        People picker is used to select one or more entities, such as people or
        groups, from a list. It makes composing an email to someone or adding
        them to a group easily if you do not know their full name or email
        address.
      </p>

      <div className="margin-top-40 usage">Basic Usage</div>

      <div className="border-radius-1 padding-24">Home</div>
      {hide && <img src={anh10} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Multi-user</div>

      <div className="border-radius-1 padding-24">Multi-user</div>
      {hide2 && <img src={anh11} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore2}
      >
        {!hide2 ? "More" : "Less"}
      </button>

      <div className="margin-top-40 usage">List</div>

      <div className="border-radius-1 padding-24">List</div>
      {hide3 && <img src={anh12} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore3}
      >
        {!hide3 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Inline preview</div>
      <div className="border-radius-1 padding-24">Inline preview</div>
      {hide4 && <img src={anh13} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore4}
      >
        {!hide4 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Disable</div>
      <div className="border-radius-1 padding-24">Disable</div>
      {hide5 && <img src={anh14} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore5}
      >
        {!hide5 ? "More" : "Less"}
      </button>
    </div>
  );
};

export default PeoplePicker;
