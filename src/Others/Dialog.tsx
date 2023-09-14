import React, { useState } from "react";

import a23 from "../assest/a23.png";
import a24 from "../assest/a24.png";

const Dialog = () => {
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
      <div className="title">Dialog</div>
      <div>
        Dialogs are modal control. It is a temporary popup that requires users
        to interact with the application.
      </div>
      <div>
        <div className=" margin-top-40 usage">When to use</div>
        <div>
          1. It is used for confirming actions, such as delete/cancel an item,
          asking people to notice.
        </div>
        <p>Do not use it when:</p>
        <div>
          2. The user must make some choices before the next step. When the
          error result needs the user to pay attention to, use dialog to show
          the alert.
        </div>
        <div className="margin-top-40 usage">Basic Usage</div>
        <div>
          Includes one primary button. A secondary button is optional. Primary
          confirmation button is always placed on the right side. Write button
          labels that are specific responses to the main information in the
          title. The title “Delete this file?” could have buttons labeled
          “Delete” and “Cancel” The Esc key acts like a “Cancel” effect.
        </div>
        <div className="border-radius-1 padding-24">Home</div>
        {hide && <img src={a23} alt="anh9" />}
        <button
          className="display-flex-2 border-radius-1 showMore"
          onClick={handleShowMore}
        >
          {!hide ? "More" : "Less"}
        </button>
        <div>
          <div className="margin-top-40 usage">Confirm</div>
          <div className="border-radius-1 padding-24">Confirm</div>
          {hide2 && <img src={a24} alt="anh9" />}
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

export default Dialog;
