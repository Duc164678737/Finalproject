import React, { useState } from "react";

import a23 from "../assest/a23.png";
import a24 from "../assest/a24.png";
import a25 from "../assest/a25.png";
import { Persona, Stack, PersonaSize } from '@gui/fluent-ui-allure';

const demoImageUrl = "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png";

const Avatar = () => {
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
      <div className="title">Avatar</div>
      <div>An avatar component represents a user, an object or entity.</div>
      <div>
        <div className=" margin-top-40 usage">When to use</div>
        <p>
          Displays a list of personas. Each circle represents a person and
          contains their image or initials. Often this control is used when
          sharing who has access to a specific view or file, or when assigning
          someone a task within a workflow.
        </p>
        <p>Do not use it when:</p>
        <div>
          1. User or group is not the primary information you want to display in
          a table or list.
        </div>
        <div>2.There is not enough space to display it.</div>
        <div className="margin-top-40 usage">Basic Usage</div>
        <div>
          Enter a keyword for name, email address, postal code, and so on.
        </div>
        <div className="border-radius-1 padding-24">
        <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 16 }}>
            <Persona circled imageUrl={demoImageUrl} />
            <Persona circled size={PersonaSize.size32} imageUrl={demoImageUrl} />
            <Persona circled size={PersonaSize.size24} imageUrl={demoImageUrl} />
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
          <div className="margin-top-40 usage">Image</div>
          <div>Enter keywords with a search icon.</div>
          <div className="border-radius-1 padding-24">
          <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 16 }}>
            <Persona text='Will Wang' />
            <Persona imageUrl={demoImageUrl} text='Will Wang' />
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
          <div className="margin-top-40 usage">Square</div>
          <div>Enter keywords with a search icon.</div>
          <div className="border-radius-1 padding-24">
          <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 16 }}>
            <Persona text='Will Wang' />
            <Persona imageUrl={demoImageUrl} text='Will Wang' />
        </Stack>
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

export default Avatar;
