import React, { useState } from "react";
import anh16 from "../assest/a16.png";
import anh17 from "../assest/a17.png";
import anh18 from "../assest/a18.png";
import { Stack, Dropdown, IDropdownStyles } from "@gui/fluent-ui-allure";

const options = [
    { text: "Option A", key: "A" },
    { text: "Option B", key: "B" },
    { text: "Option C", key: "C" },
    { text: "Option D", key: "D" },
];
const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: "280px !important" } };

const Select = () => {
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
      <div className="title">Select</div>
      <div>
        Select lets people select a single option from two or more
        choices.
      </div>

      <div className="margin-top-40 usage">Usage</div>
      <div>
        All options are visible by default to make it easier to select, so it
        should not have too many options.
      </div>
      <div className="border-radius-1 padding-24">
      <Stack horizontal tokens={{ childrenGap: 16 }}>
            <Dropdown 
                options={options}
                styles={dropdownStyles} 
                placeholder={"Choose an item"} 
            />
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
      <Stack horizontal tokens={{ childrenGap: 16 }}>
            <Dropdown
                options={options}
                styles={dropdownStyles}
                multiSelect
                disabled
                placeholder={"Choose an item"}
            />
        </Stack>
      </div>
      {hide2 && <img src={anh17} alt="anh17" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore2}
      >
        {!hide2 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Error</div>
      <div className="border-radius-1 padding-24">
      <Stack horizontal tokens={{ childrenGap: 16 }}>
            <Dropdown
                options={options}
                styles={dropdownStyles}
                errorMessage={"This field is required"}
                placeholder={"Select"}
            />
        </Stack>
      </div>
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

export default Select;
