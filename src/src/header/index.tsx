import React, { useState } from 'react'
import {  AutoComplete, IAutoCompleteStyles, AutoCompleteOptions, Stack,  Dropdown, IDropdownStyles, PrimaryButton } from "@gui/fluent-ui-allure";
import { useNavigate  } from 'react-router-dom';
const options = [
  { text: "English", key: "English" },
  { text: "German", key: "German" },
  { text: "French", key: "French" },
  { text: "Japanese", key: "Japanese" },
  { text: "Chinese", key: "Chinese" },

];
const options2 = [
  { text: "Theme: Cobalt", key: "Theme: Cobalt" },
  { text: "Theme: Teal", key: "Theme: Teal" },
  { text: "Theme: Ochre", key: "Theme: Ochre" },
  { text: "Theme: Violet", key: "Theme: Violet" },
  { text: "Theme: Magenta", key: "Theme: Magenta" },
  { text: "Theme: Lavender", key: "Theme: Lavender" },
  { text: "Theme: Mint", key: "Theme: Mint" },


];
const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: "280px !important" } };


const expanding: AutoCompleteOptions[] = [
 
    { key: "Introduction", text: "Introduction" },
    { key: "Design principle", text: "Design principle" },
    { key: "Design standark", text: "Design standark" },
    { key: "Change log", text: "Change log" },
    { key: "Button", text: "Button" },
    { key: "Icon Gallery", text: "Icon Gallery" },
    { key: "Icon", text: "Icon" },
    { key: "Common I18n Terms", text: "Common I18n Terms" },
    { key: "Common Product", text: "Common Product" },
    { key: "Typography", text: "Typography" },
    { key: "Breadcrumb", text: "Breadcrumb" },
    { key: "Navigation Menu", text: "Navigation Menu" },
    { key: "Navigatio Mmenu Light", text: "Navigatio Mmenu Light" },
    { key: "Tab", text: "Tab" },
    { key: "Tree", text: "Tree" },
    { key: "Wizard", text: "Wizard" },
    { key: "Autocomplete", text: "Autocomplete" },
    { key: "Avatar", text: "Avatar" },
    { key: "Checkbox", text: "Checkbox" },
    { key: "Datepicker", text: "Datepicker" },
    { key: "Expander", text: "Expander" },
    { key: "fileUploader", text: "fileUploader" },
    { key: "Input", text: "Input" },
    { key: "Peoplepicker", text: "Peoplepicker" },
    { key: "Radio Button", text: "Radio Button" },
    { key: "Select", text: "Select" },
    { key: "Switch", text: "Switch" },
    { key: "TimePicker", text: "TimePicker" },
    { key: "Calendar", text: "Calendar" },
    { key: "Carousel", text: "Carousel" },
    { key: "Filter", text: "Filter" },
    { key: "Pagination", text: "Pagination" },
    { key: "Table", text: "Table" },
    { key: "Tooltip", text: "Tooltip" },
    { key: "Message", text: "Message" },
    { key: "Notification", text: "Notification" },
    { key: "Dialog", text: "Dialog" },
    { key: "Modal", text: "Modal" },
    { key: "Loading", text: "Loading" },
    { key: "Panel", text: "Panel" },
    { key: "Popover", text: "Popover" },
    { key: "Progress", text: "Progress" },
    { key: "Waffle", text: "Waffle" },
];
const Navbar = () => {
  const styles: Partial<IAutoCompleteStyles> = { root: { width: 280, height: 40 } };
  const [value, setValue] = React.useState<string>();
  const [filteredElement, setFilteredElement] = useState('');
  const navigate = useNavigate();

  const onSelectedItem = (i: AutoCompleteOptions) => {
      setValue(i.text);
  };

  const onChange = (i?: string) => {
      setValue(i);
  };

  const filterElement = (userInput?: string) => {
    const filteredElements = MOCK_DATA.filter((element) => {
      return  element.replace(/\s/g, "").toLowerCase().includes(userInput?.replace(/\s/g, "").toLowerCase() || "")  ;
    });
    return filteredElements[0];
  };

  const handleButtonClick = () => {
    const filteredElement = filterElement(value);
    setFilteredElement(filteredElement);
    navigate(`/${filteredElement.replace(/\s/g, "").toLowerCase()}`)
  };

  return (
    <div>
        <div className='display-flex header'>
            <div className='display-flex-2 '>
                <img src="data:image/png;base64,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" alt="" className='logo'/>
           <Stack> Allure UI</Stack>
            </div>
            <Stack className='stack-row '>
            <AutoComplete
                id="ms-icon-complete"
                calloutWidth={280}
                styles={styles}
                expanding={value ?expanding: []}
                placeholder={"Type search keyword"}
                value={value}
                showIcon
                // elementRef={elementRef}
                onSelectedItem={onSelectedItem}
                onChange={(e, v) => onChange(v)}
            />
            <PrimaryButton  onClick={handleButtonClick}>Search</PrimaryButton>
            </Stack>
            <Stack>
            <Stack horizontal tokens={{ childrenGap: 16 }}>
            <Dropdown 
                options={options}
                styles={dropdownStyles} 
                placeholder={"English"} 
            />
            <Dropdown 
                options={options2}
                styles={dropdownStyles} 
                placeholder={"Theme: Cobalt"} 
            />
        </Stack>
            </Stack>
        </div>
    </div>
  )
}

export default Navbar

const MOCK_DATA = [
    "Introduction", 
    "Design principle", 
    "Design standark", 
    "Change log",  
    "Button",
    "Icon Gallery",
    "Icon",
    "Common I18n Terms",
    "Common Product",
    "Typography",
    "Breadcrumb",
      "Navigation Menu",
      "Navigatio Mmenu Light",
      "Tab",
      "Tree",
      "Wizard",
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
      "Calendar", 
      "Carousel", 
      "Filter", 
      "Pagination", 
      "Table", 
      "Tooltip",
      "Message", 
      "Notification",
      "Dialog",
      "Modal",
      "Loading",
      "Panel",
      "Popover",
      "Progress",
      "Waffle",
]