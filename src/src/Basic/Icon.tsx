import React, { useState } from "react";
import anh14 from "../assest/a14.png";
import anh15 from "../assest/a15.png";
import anh12 from "../assest/a12.png";
import anh13 from "../assest/a13.png";
import { Stack, FontIcon } from "@gui/fluent-ui-allure";

const Icon = () => {
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

  const style: React.CSSProperties = {
    fontSize: 24,
};
const styles = (color: string): React.CSSProperties => {
  return {
      fontSize: 24,
      color: color,
  };
};
  return (
    <div className="system-intro">
      <div className="title">Icon</div>
      <p>
        Font awesome V6 free{" "}
        <a href="https://fontawesome.com/v6/search?m=free&s=regular%2Csolid">
          https://fontawesome.com/v6/search?m=free&s=regular%2Csolid
        </a>
      </p>
      <p>
        For Microsoft - Office UI Fabric Icons{" "}
        <a
          href="
            Icon provides visual context and enh"
        >
          Icon provides visual context and enh
        </a>
      </p>
      <p>
        Icon provides visual context and enhances usability. It is often used as
        an action. Display the icon when it is available. Otherwise, they will
        be disabled. Always use a show full name when hovering on an icon, there
        will be a tooltip to display its full name.
      </p>
      <div className="margin-top-40 usage">Font awesome basic usage</div>
      <div className="border-radius-1 padding-24">
      <Stack horizontal tokens={{ childrenGap: 30 }}>
            <FontIcon style={style} iconName="fas-plus" />
            <FontIcon style={style} iconName="far-pen-to-square" />
            <FontIcon style={style} iconName="fas-trash" />
            <FontIcon style={style} iconName="af-smile" />
            <FontIcon style={style} iconName="af-face-sad-tear" />
        </Stack>
      </div>
      {hide && <img src={anh14} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Font awesome with custom color</div>
      <div className="border-radius-1 padding-24"> <Stack horizontal tokens={{ childrenGap: 30 }}>
            <FontIcon style={styles("#0072D0")} iconName="fas-plus" />
            <FontIcon style={styles("#00A84E")} iconName="far-pen-to-square" />
            <FontIcon style={styles("#D01B1B")} iconName="fas-trash" />
        </Stack></div>
      {hide2 && <img src={anh15} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore2}
      >
        {!hide2 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Office UI Fabric Icons basic usage</div>
      <div className="border-radius-1 padding-24"><Stack horizontal tokens={{ childrenGap: 30 }}>
            <FontIcon style={style} iconName="ExchangeLogo" />
            <FontIcon style={style} iconName="SharepointLogo" />
            <FontIcon style={style} iconName="TeamsLogo16" />
        </Stack></div>
      {hide3 && <img src={anh12} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore3}
      >
        {!hide3 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">
        Office UI Fabric Icons with custom color
      </div>
      <div className="border-radius-1 padding-24"><Stack horizontal tokens={{ childrenGap: 30 }}>
            <FontIcon style={styles("#0F78D4")} iconName="ExchangeLogo" />
            <FontIcon style={styles("#038387")} iconName="SharepointLogo" />
            <FontIcon style={styles("#4B53BC")} iconName="TeamsLogo16" />
        </Stack></div>
      {hide4 && <img src={anh13} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore4}
      >
        {!hide4 ? "More" : "Less"}
      </button>
    </div>
  );
};

export default Icon;
