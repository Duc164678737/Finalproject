import React, { useState } from "react";
import anh16 from "../assest/a16.png";
import anh17 from "../assest/a17.png";
import anh18 from "../assest/a18.png";
import { SampleBasic } from "./SampleBasic";

const Tree = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);

  const handleShowMore = () => {
    setHide(!hide);
  };

  const handleShowMore2 = () => {
    setHide2(!hide2);
  };

  const handleShowMore3 = () => {
    setHide3(!hide3);
  };

  return (
    <div className="system-intro">
      <div className="title">Tree</div>
      <div>
        Tabs keeps related content in a single container that is shown and
        hidden through navigation.{" "}
      </div>

      <div className="margin-top-40 usage">Usage</div>
      <div>
        Do not display too many tabs at a time, user cannot remember more than
        7-9 names. Collapse the rest of the tabs into "..." more action.{" "}
      </div>
      <div className="border-radius-1 padding-24"><SampleBasic/></div>
      {hide && <img src={anh16} alt="anh16" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Card Style</div>
      <div>
        Tabs are styled as cards. Choose a card-style tab according to your page
        layout.{" "}
      </div>

      <div className="border-radius-1 padding-24"><SampleBasic/></div>
      {hide2 && <img src={anh17} alt="anh17" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore2}
      >
        {!hide2 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Vertical Tabs</div>
      <div>
        Vertical tabs are the tabs arranged on the left in a vertical space,
        instead of on the top in a horizontal space.
      </div>

      <div className="border-radius-1 padding-24"><SampleBasic/></div>
      {hide3 && <img src={anh18} alt="anh18" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore3}
      >
        {!hide3 ? "More" : "Less"}
      </button>
    </div>
  );
};

export default Tree;
