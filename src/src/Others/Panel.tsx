import React, { useState } from "react";
import anh16 from "../assest/a16.png";
import anh17 from "../assest/a17.png";
import anh18 from "../assest/a18.png";
import { DefaultButton, IPanelStyles, Panel as Panels } from "@gui/fluent-ui-allure";

const Panel = () => {
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
  const [isOpen, setOpenPanel] = React.useState(false);
  const style = {
    backgroundColor: "#FFF",
    padding: "15px",
  };
  const contentStyle = {
    content: {
      padding: 0,
      margin: "24px 40px",
    },
  }
  return (
    <div className="system-intro">
      <div className="title">Panel</div>
      <div>
        A panel is used to provide supplemental information or form inputs that
        relate to the main content.
      </div>

      <div className="margin-top-40 usage">Basic Usage</div>
      <div>
      A panel is docked to the right side of a viewpoint.
      </div>
      <div className="border-radius-1 padding-24">
      <DefaultButton text="Open Panel" onClick={() => setOpenPanel(true)} />
    <Panels
      styles={contentStyle}
      headerText="Panel heading"
      isOpen={isOpen}
      onDismiss={() => setOpenPanel(false)}
    >
    </Panels>
      </div>
      {hide && <img src={anh16} alt="anh16" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Wide</div>
      <div className="border-radius-1 padding-24">
      <DefaultButton text="Open Panel" onClick={() => setOpenPanel(true)} />
    <Panels
      styles={contentStyle}
      headerText="Panel heading"
      isOpen={isOpen}
      onDismiss={() => setOpenPanel(false)}
    >
    </Panels>
      </div>
      {hide2 && <img src={anh17} alt="anh17" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore2}
      >
        {!hide2 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Extra</div>

      <div className="border-radius-1 padding-24">
      <DefaultButton text="Open Panel" onClick={() => setOpenPanel(true)} />
    <Panels
      styles={contentStyle}
      headerText="Panel heading"
      isOpen={isOpen}
      onDismiss={() => setOpenPanel(false)}
    >
    </Panels>
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

export default Panel;
