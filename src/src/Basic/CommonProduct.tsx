import React from "react";

const CommonProduct = () => {
  return (
    <div className="system-intro">
      <div className="title">Common Product</div>
      <p>
        Allure depends on @gui/common-i18n-terms which is a package including
        some common function that can be used in your projects.
      </p>
      <div style={{ fontWeight: "bold" }}>name icon</div>
      {MOCK_DATA.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default CommonProduct;

const MOCK_DATA = [
  "DocAve Online",
  "Cloud Governance",
  "File Share Navigator Online",
  "Cloud Backup for Salesforce ®",
  "Cloud Insights",
  "AvePoint Online Services for Partners",
  "AvePoint Perimeter Online",
  "Cloud Backup for Microsoft 365",
  "Cloud Management",
  "Cloud Archiving",
  "Elements Backup",
  "Cloud Records",
  "Cloud Backup for Dynamics 365",
  "Office Connect Online Manager",
  "DocAve Online",
  "Cloud Governance",
  "File Share Navigator Online",
  "Cloud Backup for Salesforce ®",
  "Cloud Insights",
  "AvePoint Online Services for Partners",
  "AvePoint Perimeter Online",
  "Cloud Backup for Microsoft 365",
  "Cloud Management",
  "Cloud Archiving",
  "Elements Backup",
  "Cloud Records",
  "Cloud Backup for Dynamics 365",
  "Office Connect Online Manager",
];
