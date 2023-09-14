import React, { useState } from "react";
import { Breadcrumb as Breadcrumbs, IBreadcrumbItem } from "@gui/fluent-ui-allure";
import anh4 from "../assest/a4.png";
import anh5 from "../assest/a5.png";
import anh6 from "../assest/a6.png";
import anh7 from "../assest/a7.png";

const Breadcrumb = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);

  const handleShowMore = () => {
    setHide(!hide);
  };

  const handleShowMore2 = () => {
    setHide2(!hide2);
  };

  const handleShowMore3 = () => {
    setHide3(!hide3);
  };

  const handleShowMore4 = () => {
    setHide4(!hide4);
  };
  const items: IBreadcrumbItem[] = [{ text: "Home", key: "Home" }];

  const itemss: IBreadcrumbItem[] = [
    { text: "Home(non-clickable)", key: "k1" },
    { text: "Sub", key: "k2" },
    { text: "Sub2(non-clickable)", key: "k3" },
    { text: "Detail", key: "k4" },
];


  return (
    <div className="system-intro">
      <div className="title">Breadcrumb</div>
      <p>
        It display by the page hierarchy and allows user to know where they are.
        Better to have this breadcrumb navigation except for homepage.
      </p>
      <div>
        Don't use when:
        <ul>
          <li>Product has no logical hierarchy</li>
          <li>
            There are too many navigation options that are very close together.
          </li>
          <li>Breadcrumb cannot replace the primary navigation.</li>
        </ul>
      </div>
      <div>
        <div className="usage margin-top-40">Usage</div>
        <div>
          When there is only 1 level breadcrumb, it is not clickable. But the
          text color is black.
        </div>
        <div className="border-radius-1 padding-24">
        <Breadcrumbs items={items} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;
        </div>
        {hide && <img src={anh4} alt="anh3" />}
        <button
          className="display-flex-2 border-radius-1 showMore"
          onClick={handleShowMore}
        >
          {!hide ? "More" : "Less"}
        </button>
      </div>
      <div>
      <div className="usage margin-top-40">Usage</div>
        <p>Some links may not be clickable.</p>
        <div className="border-radius-1 padding-24"><Breadcrumbs items={itemss} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;</div>
        {hide2 && <img src={anh5} alt="anh3" />}
        <button
          className="display-flex-2 border-radius-1 showMore"
          onClick={handleShowMore2}
        >
          {!hide2 ? "More" : "Less"}
        </button>
        <p>Example for multi-parent nodes. This is a common style..</p>
        <div className="border-radius-1 padding-24"><Breadcrumbs items={itemss} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" /></div>
        {hide3 && <img src={anh6} alt="anh3" />}
        <button
          className="display-flex-2 border-radius-1 showMore"
          onClick={handleShowMore3}
        >
          {!hide3 ? "More" : "Less"}
        </button>
        <p>
          Show ... in the middle of breadcrumb when there are so many nodes that
          cannot show all at the same time. Always keep the first level and the
          last level visible.
        </p>
        <div className="border-radius-1 padding-24"><Breadcrumbs items={itemss} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" /></div>
        {hide4 && <img src={anh7} alt="anh3" />}
        <button
          className="display-flex-2 border-radius-1 showMore"
          onClick={handleShowMore4}
        >
          {!hide4 ? "More" : "Less"}
        </button>
        <p>
          Show ... at the beginning of breadcrumb when there are so many nodes
          that cannot show all at the same time. Always keep the last level
          visible.
        </p>
        <div className="border-radius-1 padding-24"><Breadcrumbs items={itemss} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" /></div>
        {hide && <img src={anh7} alt="anh3" />}
        <button
          className="display-flex-2 border-radius-1 showMore"
          onClick={handleShowMore2}
        >
          {!hide ? "More" : "Less"}
        </button>
      </div>
    </div>
  );
};

export default Breadcrumb;
