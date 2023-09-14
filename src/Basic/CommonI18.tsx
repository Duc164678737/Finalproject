import React from "react";

const CommonI18 = () => {
  return (
    <div className="system-intro">
      <div className="title">Common I18N Terms</div>
      <p>
        Allure depends on @gui/common-i18n-terms which is a package including
        some common terms that can be used in your pr
      </p>
      <div style={{fontWeight: "bold"}}>Key Value</div>
      <div>
        {KEY_VALUE.map((item, Index) => (
          <div className="display-flex">
            <div className="flex-1">{item.key}</div>
            <div className="flex-1">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonI18;

const KEY_VALUE = [
  {
    key: "Common I18N Terms",
    value: "Cloud Archiving",
  },
  {
    key: "I18NShared_Product_Policies for Microsoft 365",
    value: "Policies for Microsoft 365",
  },
  {
    key: "I18NShared_Product_AvePoint Perimeter Online",
    value: "AvePoint Perimeter Online",
  },
  {
    key: "I18NShared_Product_Cloud Records",
    value: "Cloud Records",
  },
  {
    key: "I18NShared_Product_Cloud Index",
    value: "Cloud Index",
  },
  {
    key: "I18NShared_Product_AvePoint Permissions Manager",
    value: "AvePoint Permissions Manager (Preview)",
  },
  {
    key: "I18NShared_Product_ReCenter for Microsoft 365",
    value: "ReCenter (for Microsoft 365)",
  },
  {
    key: "I18NShared_Product_Cloud Governance",
    value: "Cloud Governance",
  },
  {
    key: "I18NShared_Product_Cloud Insights",
    value: "Cloud Insights",
  },
  {
    key: "I18NShared_Product_Entrust",
    value: "Entrust",
  },
  {
    key: "I18NShared_Product_Fly",
    value: "Fly",
  },
  {
    key: "I18NShared_Product_DocAve Backup for Salesforce",
    value: "DocAve Backup for Salesforce",
  },
  {
    key: "I18NShared_Product_Confide",
    value: "Confide",
  },
  {
    key: "I18NShared_Product_Cloud Backup for Dynamics 365",
    value: "Cloud Backup for Dynamics 365",
  },
  {
    key: "I18NShared_Product_Cense",
    value: "Cense",
  },
  {
    key: "I18NShared_Product_Compliance Guardian Online",
    value: "Compliance Guardian Online",
  },
  {
    key: "I18NShared_Product_Cloud Backup for Google Workspace",
    value: "Cloud Backup for Google Workspace",
  },
  {
    key: "I18NShared_Product_GroupHub",
    value: "GroupHub",
  },
  {
    key: "I18NShared_Product_ReCenter for Google Workspace",
    value: "ReCenter (for Google Workspace)",
  },
  {
    key: "I18NShared_Product_ReCenter",
    value: "ReCenter",
  },
  {
    key: "I18NShared_Product_Cloud Backup for Dynamics 365",
    value: "Cloud Backup for Dynamics 365",
  },
  {
    key: "I18NShared_Product_Cense",
    value: "Cense",
  },
  {
    key: "I18NShared_Product_Compliance Guardian Online",
    value: "Compliance Guardian Online",
  },
  {
    key: "I18NShared_Product_Cloud Backup for Google Workspace",
    value: "Cloud Backup for Google Workspace",
  },
  {
    key: "I18NShared_Product_GroupHub",
    value: "GroupHub",
  },
  {
    key: "I18NShared_Product_ReCenter for Google Workspace",
    value: "ReCenter (for Google Workspace)",
  },
  {
    key: "I18NShared_Product_ReCenter",
    value: "ReCenter",
  },
  {
    key: "Common I18N Terms",
    value: "Cloud Archiving",
  },
  {
    key: "I18NShared_Product_Policies for Microsoft 365",
    value: "Policies for Microsoft 365",
  },
  {
    key: "I18NShared_Product_AvePoint Perimeter Online",
    value: "AvePoint Perimeter Online",
  },
  {
    key: "I18NShared_Product_Cloud Records",
    value: "Cloud Records",
  },
  {
    key: "I18NShared_Product_Cloud Index",
    value: "Cloud Index",
  },
  {
    key: "I18NShared_Product_AvePoint Permissions Manager",
    value: "AvePoint Permissions Manager (Preview)",
  },
  {
    key: "I18NShared_Product_ReCenter for Microsoft 365",
    value: "ReCenter (for Microsoft 365)",
  },
];
