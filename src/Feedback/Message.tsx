import React, { useState } from "react";
import anh16 from "../assest/a16.png";
import anh17 from "../assest/a17.png";
import anh18 from "../assest/a18.png";
import { MessageBar, MessageBarType, Stack } from "@gui/fluent-ui-allure";

const Message = () => {
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
      <div className="title">Message</div>
      <div>
        A banner (MessageBar) displays errors, warnings, or important
        information about an open app or file. For example, if a file failed to
        upload an error message bar should appear.
      </div>

      <div className="margin-top-40 usage">Basic Usage</div>

      <div className="border-radius-1 padding-24">
      <Stack tokens={{ childrenGap: 20 }}>
            <MessageBar messageBarType={MessageBarType.info}>
                Information message content with nothing else.
            </MessageBar>

            <MessageBar messageBarType={MessageBarType.severeWarning}>
            Warning message content with nothing else.
            </MessageBar>
            <MessageBar messageBarType={MessageBarType.error}>Error message content with nothing else.</MessageBar>
        </Stack>
      </div>
      {hide && <img src={anh16} alt="anh16" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Multiline message</div>

      <div className="border-radius-1 padding-24">
      <Stack style={{width: 320}} tokens={{ childrenGap: 20 }}>
            <MessageBar messageBarType={MessageBarType.info} isMultiline>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, aliquid similique laudantium reiciendis omnis libero reprehenderit velit est ullam numquam, maxime quisquam dolor. Architecto, sed ipsum distinctio quibusdam fugit neque?
            </MessageBar>

            <MessageBar messageBarType={MessageBarType.severeWarning} isMultiline>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nesciunt iusto. Eos quibusdam, libero, itaque culpa ipsam odit doloremque omnis reprehenderit quis eaque cumque sequi hic! Sequi iusto ad quas.
            </MessageBar>
            <MessageBar messageBarType={MessageBarType.error} isMultiline>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam similique, dolores illum rem facilis, est animi saepe fugit, voluptates nulla. Eveniet fugit, animi perspiciatis expedita tempora sunt accusamus facilis.
            </MessageBar>
        </Stack>
      </div>
      {hide2 && <img src={anh17} alt="anh17" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore2}
      >
        {!hide2 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">With dismiss button</div>
      <div className="border-radius-1 padding-24">
      <Stack tokens={{ childrenGap: 20 }}>
            <MessageBar messageBarType={MessageBarType.info}>
                Harum, aliquid similique laudantium reiciendis omnis libero reprehenderit velit est ullam numquam, maxime quisquam dolor. 
            </MessageBar>

            <MessageBar messageBarType={MessageBarType.severeWarning}>
                Distinctio, nesciunt iusto. Eos quibusdam, libero, itaque culpa ipsam odit doloremque omnis reprehenderit.
            </MessageBar>
            <MessageBar messageBarType={MessageBarType.error}>
                Error veniam similique, dolores illum rem facilis, est animi saepe fugit, voluptates nulla. 
            </MessageBar>
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

export default Message;
