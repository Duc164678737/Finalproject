import React, { useState } from "react";

import anh19 from "../assest/a19.png";
import anh20 from "../assest/a20.png";
import { SampleHorizontal } from "./SampleHorizontal";

const Wizard = () => {
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
      <div className="title">Wizard</div>
      <div>
        Wizard is a progress indicator that communicates to the user the
        progress of a particular process.
      </div>
      <div className="margin-top-40 usage">When to use</div>
      <div>
        Use a wizard when a user needs to fill or operate a lot of content,
        especially when this content has hierarchy relationships.
      </div>
      <div>
        <div className="margin-top-40 usage">Horizontal Wizard</div>
        <div>
          Horizontal wizards are ideal when the contents of one step depend on
          an earlier step.
        </div>
        <div>Avoid using long step names in horizontal wizards.</div>
        <div className="border-radius-1 padding-24"></div>
        {hide && (
            <img src={anh19} alt="anh3" />
        )}
        <button
          className="display-flex-2 border-radius-1 showMore"
          onClick={handleShowMore}
        >
          {!hide ? "More" : "Less"}
        </button>
        <div>
          <div className=" margin-top-40 usage">Navigation-Collapsed</div>
          <p>The navigation menu is always collapsed.</p>
          <div className="border-radius-1 padding-24"><SampleHorizontal/></div>
          {hide2 && (
              <img src={anh20} alt="anh9" />
          )}
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

export default Wizard;
