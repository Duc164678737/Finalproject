import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleRouter = (item2: any) => {
    return item2.replace(/\s/g, "").toLowerCase();
  };

  const handleClick = (link: any) => {
    setActiveLink(link);
  };

  return (
    <div className="siderBar">
      {INavLinkGroup.map((item, index) => (
        <div className="siderBar-title" key={index}>
          {item.title}
          {item.link.map((item2, index2) => (
            <div
              className="siderBar-content"
              key={index2}
              // onClick={()=>handleRouter(item2)}
            >
              <Link
                onClick={() => handleClick(item2)}
                className={`siderBar-content-link ${
                  activeLink === item2 ? "active" : ""
                }`}
                to={
                  handleRouter(item2) === "designstandark"
                    ? "https://xd.adobe.com/view/34543319-c6da-4dd9-be05-fe7b01ae133b-6107/"
                    : handleRouter(item2)
                }
              >
                {item2}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SideBar;

export const INavLinkGroup = [
  {
    title: "Allure Design System",
    link: ["Introduction", "Design principle", "Design standark", "Change log"],
  },
  {
    title: "Basic",
    link: [
      "Button",
      "Icon Gallery",
      "Icon",
      "Common I18n Terms",
      "Common Product",
      "Typography",
    ],
  },
  {
    title: "Navigation",
    link: [
      "Breadcrumb",
      "Navigation Menu",
      "Navigatio Mmenu Light",
      "Tab",
      "Tree",
      "Wizard",
    ],
  },
  {
    title: "Form",
    link: [
      "Autocomplete",
      "Avatar",
      "Checkbox",
      "Datepicker",
      "Expander",
      "fileUploader",
      "Input",
      "Peoplepicker",
      "Radio Button",
      "Select",
      "Switch",
      "TimePicker",
    ],
  },
  {
    title: "Data",
    link: ["Calendar", "Carousel", "Filter", "Pagination", "Table", "Tooltip"],
  },
  {
    title: "Feedback",
    link: ["Message", "Notification"],
  },
  {
    title: "Others",
    link: [
      "Dialog",
      "Modal",
      "Loading",
      "Panel",
      "Popover",
      "Progress",
      "Waffle",
    ],
  },
];
