import React, { useState } from "react";
import anh16 from "../assest/a16.png";
import anh17 from "../assest/a17.png";
import anh18 from "../assest/a18.png";
import { Stack, Progress as Progesss } from "@gui/fluent-ui-allure";

const Progress = () => {
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
      <div className="title">Progress</div>
      <div>
        Progress Indicators are used to show the completion status of an
        operation lasting more than 2 seconds. If the state of progress cannot
        be determined, use a Spinner instead. Progress Indicators can appear in
        a new panel, a flyout, under the UI initiating the operation.
      </div>

      <div className="margin-top-40 usage">Progress bar</div>
      <div className="border-radius-1 padding-24">
      <Stack horizontal tokens={{ childrenGap: 80 }}>
            <Stack tokens={{ childrenGap: 16 }}>
                <Progesss
                    size={256}
                    percent={0}
                ></Progesss>
                <Progesss
                    size={256}
                    percent={85}
                ></Progesss>
                <Progesss
                    size={256}
                    percent={100}
                    status='success'
                    text='Successfully'
                ></Progesss>
                <Progesss
                    size={256}
                    percent={70}
                    status='failed'
                    text='Upload failed'
                ></Progesss>
            </Stack>
            <Stack tokens={{ childrenGap: 24 }}>
                <Progesss
                    size={256}
                    percent={0}
                    textDirectional='bottom'
                ></Progesss>
                <Progesss
                    size={256}
                    percent={85}
                    textDirectional='bottom'
                ></Progesss>
                <Progesss
                    size={256}

                    percent={100}
                    status='success'
                    text='Successfully'
                    textDirectional='bottom'
                ></Progesss>
                <Progesss
                    size={256}

                    percent={70}
                    status='failed'
                    text='Upload failed'
                    textDirectional='bottom'
                ></Progesss>
            </Stack>
        </Stack>
      </div>
      {hide && <img src={anh16} alt="anh16" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Circle Progress</div>
      <div className="border-radius-1 padding-24">
      <Stack tokens={{ childrenGap: 80 }}>
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <Progesss
                    progressType="circle"
                    size={120}
                    percent={0}
                    styles={{ circleIcon: { fontSize: 36 }, circleText: { fontSize: 24 } }}
                ></Progesss>
                <Progesss
                    progressType="circle"
                    size={120}
                    percent={85}
                ></Progesss>
                <Progesss
                    progressType="circle"
                    size={120}
                    percent={85}
                    showIconInprogress={true}
                ></Progesss>

            </Stack>
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <Progesss
                    progressType="circle"
                    size={120}
                    percent={100}
                    status={'success'}
                ></Progesss>
                <Progesss
                    progressType="circle"
                    size={120}
                    percent={100}
                    status={'warning'}
                ></Progesss>
                <Progesss
                    progressType="circle"
                    size={120}
                    percent={100}
                    status={'failed'}
                ></Progesss>
            </Stack>
        </Stack>
      </div>
      {hide2 && <img src={anh17} alt="anh17" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore2}
      >
        {!hide2 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Static Progress</div>

      <div className="border-radius-1 padding-24">
      <Stack horizontal tokens={{ childrenGap: 80 }}>
            <Progesss
                progressType="static"
                size={256}
                section={4}
                percent={25}
                text="Completion Degree: 25%"
            ></Progesss>
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

export default Progress;
