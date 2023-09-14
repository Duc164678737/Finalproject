import React, { useState } from "react";

import a21 from "../assest/a21.png";
import a22 from "../assest/a22.png";
import { SampleBasic } from "./SampleBasic";

const AutoComplete = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);

  const handleShowMore2 = () => {
    setHide2(!hide2);
  };
  const handleShowMore = () => {
    setHide(!hide);
  };

  return (
    <div className="system-intro">
      <div className="title">AutoComplete</div>
      <div>
        The date field can be automatically filled or show users an option list
        that stored previous information, such as a user's name or address. When
        a user enters a value, the selection control can auto-load the matched
        results.
      </div>
      <div>
        <div className=" margin-top-40 usage">When to use</div>
        <p>
          1. Use auto-complete field when the user tends to use the data that
          he/she already entered before.
        </p>
        <p>2. Search for matched values from list</p>
        <p>
          3. Global search, anything that matched the keywords will be displayed
        </p>
        <div className="margin-top-40 usage">Basic Usage</div>
        <div>
          Enter a keyword for name, email address, postal code, and so on.
        </div>
        <div className="border-radius-1 padding-24"><SampleBasic/></div>
        {hide && <img src={a21} alt="anh9" />}
        <button
          className="display-flex-2 border-radius-1 showMore"
          onClick={handleShowMore}
        >
          {!hide ? "More" : "Less"}
        </button>
        <div>
          <div className="margin-top-40 usage">Search</div>
          <div>Enter keywords with a search icon.</div>
          <div className="border-radius-1 padding-24"><SampleBasic/></div>
          {hide2 && <img src={a22} alt="anh9" />}
          <button
            className="display-flex-2 border-radius-1 showMore"
            onClick={handleShowMore2}
          >
            {!hide2 ? "More" : "Less"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
