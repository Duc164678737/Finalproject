import React, { useState } from "react";
import anh16 from "../assest/a16.png";
import anh17 from "../assest/a17.png";
import anh18 from "../assest/a18.png";
import { Stack, Toggle } from "@gui/fluent-ui-allure";

const Switch = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [largeChecked, setLargeChecked] = React.useState(true);
  const [smallChecked, setSmallChecked] = React.useState(true);

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
      <div className="title">Switch</div>
      <div>
        Allow the user to choose between two mutually exclusive options.
      </div>

      <div className="margin-top-40 usage">Usage</div>
      <div>
        All options are visible by default to make it easier to select, so it
        should not have too many options.
      </div>
      <div className="border-radius-1 padding-24">
      <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 20 }}>
            <Toggle checked={largeChecked} onChange={(_, checked) => { setLargeChecked(true) }}  />
            <Toggle checked={smallChecked} onChange={(_, checked) => { setSmallChecked(false) }} size="small" />
        </Stack>
      </div>
      {hide && <img src={anh16} alt="anh16" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Disable</div>

      <div className="border-radius-1 padding-24">
      <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 20 }}>
            <Toggle checked disabled />
            <Toggle disabled />
            <Toggle checked disabled size="small" />
            <Toggle disabled size="small" />
        </Stack>
      </div>
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

export default Switch;
