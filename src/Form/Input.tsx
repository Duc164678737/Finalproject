import React, { useState } from "react";
import { ITextFieldStyles, Stack, TextField } from "@gui/fluent-ui-allure";
import anh10 from "../assest/a10.png";
import anh11 from "../assest/a11.png";
import anh12 from "../assest/a12.png";
import anh13 from "../assest/a13.png";
import anh14 from "../assest/a14.png";
import anh15 from "../assest/a15.png";

const Input = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);
  const [hide5, setHide5] = useState(false);
  const [hide6, setHide6] = useState(false);

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

  const handleShowMore5 = () => {
    setHide5(!hide5);
  };

  const handleShowMore6 = () => {
    setHide6(!hide6);
  };
  const styles: Partial<ITextFieldStyles> = { root: { width: 280 } };
  return (
    <div className="system-intro">
      <div className="title margin-top-40">Input</div>
      <p>
        Input gives people a way to enter and edit text. They are used in forms,
        modal dialogs, tables, and other surfaces where text input is required.
      </p>

      <div className="margin-top-40 usage">Basic Usage</div>

      <div className="border-radius-1 padding-24"> <Stack horizontal tokens={{ childrenGap: 20 }}>
            <TextField styles={styles}/>
        </Stack></div>
      {hide && <img src={anh10} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Disabled</div>

      <div className="border-radius-1 padding-24"><Stack horizontal tokens={{ childrenGap: 20 }}>
            <TextField styles={styles} disabled value="Disabled"/>
        </Stack></div>
      {hide2 && <img src={anh11} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore2}
      >
        {!hide2 ? "More" : "Less"}
      </button>

      <div className="margin-top-40 usage">Text area</div>

      <div className="border-radius-1 padding-24">
      <Stack horizontal tokens={{ childrenGap: 20 }}>
            <TextField styles={styles} multiline resizable={false}/>
        </Stack>
      </div>
      {hide3 && <img src={anh12} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore3}
      >
        {!hide3 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Disable Text area</div>
      <div className="border-radius-1 padding-24"><Stack horizontal tokens={{ childrenGap: 20 }}>
            <TextField styles={styles} disabled multiline resizable={false} value="Your text area content goes here." />
        </Stack></div>
      {hide4 && <img src={anh13} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore4}
      >
        {!hide4 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Error</div>
      <div className="border-radius-1 padding-24"><Stack horizontal tokens={{ childrenGap: 20 }}>
            <TextField styles={styles} errorMessage={"This field is required"} placeholder="input"/>
        </Stack></div>
      {hide5 && <img src={anh15} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore5}
      >
        {!hide5 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Search</div>
      <div className="border-radius-1 padding-24"><Stack horizontal tokens={{ childrenGap: 20 }}>
            <TextField styles={styles} errorMessage={"This field is required"} placeholder="input"/>
        </Stack></div>
      {hide6 && <img src={anh14} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore6}
      >
        {!hide6 ? "More" : "Less"}
      </button>
    </div>
  );
};

export default Input;
