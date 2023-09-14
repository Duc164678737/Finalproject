import React, { useState } from "react";
import anh3 from "../assest/a3.png";
import { Sample } from "./Sample";

const Notification = () => {
  const [hide, setHide] = useState(false);
  const handleShowMore = () => {
    setHide(!hide);
  };

  return (
    <div className="system-intro">
      <div className="title">Notification</div>
      <div>
        Notification is a message bar that displays successful, warning and
        error feedback information at the top right.
      </div>
      <div className="usage margin-top-40">Basic Usage</div>
      <div>
        1. Provide system feedback after performing an action such as: updating
        successfully, deleting successfully, etc.
      </div>
      <div>
        2. The Newest one is on the top. A maximum of 4 messages can be
        displayed at the same time.s
      </div>
      <div>
        3. Feedback will auto close in 5 seconds. Users can also close manually
        by clicking "X".
      </div>
      <div>
        4. When the error result needs the user to pay attention to, use dialog
        to show the alert.
      </div>
      <div className="border-radius-1 padding-24">
        <Sample/>
      </div>

      {hide && <img src={anh3} alt="anh3" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
    </div>
  );
};

export default Notification;
