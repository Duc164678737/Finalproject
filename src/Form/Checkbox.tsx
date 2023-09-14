import React, { useState } from "react";
import { Checkbox as CheckBox, Stack } from "@gui/fluent-ui-allure";

import a23 from "../assest/a23.png";
import a24 from "../assest/a24.png";
import a25 from "../assest/a25.png";

const Checkbox = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);

  const handleShowMore2 = () => {
    setHide2(!hide2);
  };
  const handleShowMore = () => {
    setHide(!hide);
  };
  const handleShowMore3 = () => {
    setHide3(!hide3);
  };

  return (
    <div className="system-intro">
      <div className="title">Checkbox</div>
      <div>Checkbox is used to select one or more items from a set.</div>
      <div>
        <div className="margin-top-40 usage">Basic Usage</div>
        <div>
          1. Use only one checkbox when you need to agree on some conditions or
          terms. Such as: Do not show again, I agree on terms...
        </div>
        <div>
          2.Use checkboxes when the user can select multiple items, such as:
          select items from a table.
        </div>
        <div className="border-radius-1 padding-24">
        <Stack horizontal tokens={{ childrenGap: 20 }}>
            <CheckBox label="check box" />
        </Stack>
        </div>
        {hide && <img src={a23} alt="anh9" />}
        <button
          className="display-flex-2 border-radius-1 showMore"
          onClick={handleShowMore}
        >
          {!hide ? "More" : "Less"}
        </button>
        <div>
          <div className="margin-top-40 usage">Disabled</div>
          <div className="border-radius-1 padding-24">
          <Stack horizontal tokens={{ childrenGap: 20 }}>
            <CheckBox label="Check box" disabled />
            <CheckBox label="Check box" disabled checked />
        </Stack>
          </div>
          {hide2 && <img src={a24} alt="anh9" />}
          <button
            className="display-flex-2 border-radius-1 showMore"
            onClick={handleShowMore2}
          >
            {!hide2 ? "More" : "Less"}
          </button>
        </div>
        <div>
          <div className="margin-top-40 usage">Check all</div>
          <div className="border-radius-1 padding-24">

          <CheckBox label="check box" />
          <CheckBox label="check box" />
          <CheckBox label="check box" />

          </div>
          {hide3 && <img src={a25} alt="anh9" />}
          <button
            className="display-flex-2 border-radius-1 showMore"
            onClick={handleShowMore3}
          >
            {!hide3 ? "More" : "Less"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
