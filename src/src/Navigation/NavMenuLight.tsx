import React, { useState } from "react";

import anh8 from "../assest/a8.png";
import anh9 from "../assest/a9.png";
import { NavView } from "./NavView";

const NavMenuLight = () => {
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
      <div className="title">Navigation Menu Light</div>
      <div>
        Navigation menu is the list of links that the user can always access.
      </div>
      <div>
        <div className="margin-top-40 usage">Usage</div>
        <p>
          1. Which contains the main functions links. A main function navigation
          can have sub-navigation items by using a hierarchy style.
        </p>
        <p>
          2. Icons in the navigation bar serve as a visual affordance that
          indicates the item is actionable. For example, when hovering a
          navigation item, it will appear lighter blue color as the background.
        </p>
        <p>
          3. If a navigation item is a group, it does not have the function to
          access other pages. Only can expand or collapse the navigation item
          group.
        </p>
        <div className="border-radius-1 padding-24"><NavView /></div>
        {hide && (
          <>
            <img src={anh8} alt="anh3" />
            <img src={anh9} alt="anh9" />
          </>
        )}
        <button
          className="display-flex-2 border-radius-1 showMore"
          onClick={handleShowMore}
        >
          {!hide ? "More" : "Less"}
        </button>
        <div>
          <div className="margin-top-40 usage">Navigation-Collapsed</div>
          <p>The navigation menu is always collapsed.</p>
          <div className="border-radius-1 padding-24"><NavView /></div>
          {hide2 && (
            <>
              <img src={anh8} alt="anh3" />
              <img src={anh9} alt="anh9" />
            </>
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

export default NavMenuLight;
