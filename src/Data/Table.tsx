import React, { useState } from "react";
import anh17 from "../assest/a17.png";
import { TableSample } from "./TableSample";

const Table = () => {
  const [hide, setHide] = useState(false);

  const handleShowMore = () => {
    setHide(!hide);
  };

  return (
    <div className="system-intro">
      <div className="title">Table</div>
      <div>
        Table is a robust way to display an information-rich collection of items
        and allow people to sort and filter the content.
      </div>

      <div className="margin-top-40 usage">Basic Usage</div>
      <div>
        The first column is usually the key column. If it can drill down to see
        details, make the first column bold. The column can be of several types:
        text, image, icon with text, link, and avatar with description.
      </div>
      <div className="border-radius-1 padding-24">
        <TableSample />
      </div>
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

export default Table;
