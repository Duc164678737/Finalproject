import React, { useState } from "react";
import anh17 from "../assest/a17.png";
import { Loading as Loadings, TextField, PrimaryButton } from '@gui/fluent-ui-allure';

const modalStyle: React.CSSProperties = {
  backgroundColor: '#FFFC',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const Loading = () => {
  const [hide, setHide] = useState(false);

  const handleShowMore = () => {
    setHide(!hide);
  };

  return (
    <div className="system-intro">
      <div className="title">Loading</div>
      <div>
        Loading Indicates to the user that the system is actively retrieving or
        dealing with data. When part of the page/whole page is waiting for
        asynchronous data, an appropriate loading animation effectively
        alleviates users' inquietude.
      </div>

      <div className="margin-top-40 usage">Loading inside a container</div>
      <div>
        When showing the loading indicator, it should block out the
        corresponding part/whole screen with a mask.
      </div>
      <div className="border-radius-1 padding-24">
      <TextField label='Username' />
            <TextField label='Password' />
            <PrimaryButton style={{marginTop: 10}}>Save</PrimaryButton>
            
            <div style={modalStyle}>
                {/* <Loadings /> */}
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

export default Loading;
