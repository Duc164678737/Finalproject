import React, { useState } from "react";
import anh10 from "../assest/a10.png";
import anh11 from "../assest/a11.png";
import anh12 from "../assest/a12.png";
import anh13 from "../assest/a13.png";
import { fileExtensionManager } from "@gui/fluent-ui-allure";
const itemStyle: React.CSSProperties = {
  display: 'inline-flex',
  border: '1px solid #e8e9ea',
  backgroundColor: '#f2f3f4',
  width: 130,
  height: 40,
  alignItems: 'center',
  padding: 15,
  justifyContent: 'space-between',
  borderRadius: 3,
  marginLeft: 15,
  marginBottom: 15,
  boxShadow: '3px 3px 5px rgba(0,0,0,0.3)'
};
const iconStyle: React.CSSProperties = {};
const extensionStyle: React.CSSProperties = {
  fontWeight: 'bold'
};
const FileUploader = () => {
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
  return (
    <div className="system-intro">
      <div className="title margin-top-40">FileUploader</div>
      <p>Allow user to upload files from local place.</p>

      <div className="margin-top-40 usage">Single file browser</div>
      <p>This control allow user to browse only one file.</p>
      <div className="border-radius-1 padding-24">{Object.keys(fileExtensionManager.getAllMappings()).map((key) => {
                return (
                    <div key={key} style={itemStyle}>
                        <span style={iconStyle}>{fileExtensionManager.getMapping(key).icon}</span>
                        <span style={extensionStyle}>{key}</span>
                    </div>
                );
            })}</div>
      {hide && <img src={anh10} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Single file uploader</div>
      <div>This control allow user to upload only one file.</div>
      <div className="border-radius-1 padding-24">Single file uploader</div>
      {hide2 && <img src={anh11} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore2}
      >
        {!hide2 ? "More" : "Less"}
      </button>

      <div className="margin-top-40 usage">Basic usage</div>
      <div>
        This control should support drag and drop for ease of use. Better let
        user to know which types can be uploaded in advance.tc
      </div>
      <div className="border-radius-1 padding-24">Basic usage</div>
      {hide3 && <img src={anh12} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore3}
      >
        {!hide3 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">File types and icons</div>
      <div>There are some built-in supported file types and icons.</div>
      <div className="border-radius-1 padding-24">File types and icons</div>
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

export default FileUploader;
