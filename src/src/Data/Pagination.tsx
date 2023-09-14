import React, { useState } from "react";
import anh17 from "../assest/a17.png";
import {
  Pagination as Paginations
} from "@gui/fluent-ui-allure";

const Pagination = () => {
  const [hide, setHide] = useState(false);

  const handleShowMore = () => {
    setHide(!hide);
  };

  return (
    <div className="system-intro">
      <div className="title">Pagination</div>
      <div>
        An extensive list can be divided into several pages using pagination,
        and only one page will be displayed at a time.
      </div>

      <div className="margin-top-40 usage">Basic Usage</div>
      <div>
        1. Next and Previous links are user-friendly options to navigate to the
        next and previous pages one by one.
      </div>
      <div>
        2. The user can also jump to a specified page by selecting from the
        dropdown list.
      </div>
      <div className="border-radius-1 padding-24">
      <div>
            <Paginations totalPages={25} onPageChanged={page => console.log(page)} ariaLabel="Pagination"  />
        </div>
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

export default Pagination;
