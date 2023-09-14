import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./header";
import SideBar from "./sidebar";
import Introduction from "./System/Introduction";
import Design from "./System/Design";
import Button from "./Basic/Button";
import IconGallery from "./Basic/IconGallery";
import Icon from "./Basic/Icon";
import CommonI18 from "./Basic/CommonI18";
import CommonProduct from "./Basic/CommonProduct";
import Typography from "./Basic/Typography";
import Breadcrumb from "./Navigation/Breadcrumb";
import NavMenu from "./Navigation/NavMenu";
import NavMenuLight from "./Navigation/NavMenuLight";
import Tab from "./Navigation/Tab";
import Wizard from "./Navigation/Wizard";
import AutoComplete from "./Form/AutoComplete";
import Avatar from "./Form/Avatar";
import Checkbox from "./Form/Checkbox";
import DatePicker from "./Form/DatePicker";
import Tree from "./Navigation/Tree";
import Expander from "./Form/Expander";
import FileUploader from "./Form/FileUploader";
import Input from "./Form/Input";
import PeoplePicker from "./Form/PeoplePicker";
import RadioButton from "./Form/RadioButton";
import Select from "./Form/Select";
import Switch from "./Form/Switch";
import TimePicker from "./Form/TimePicker";
import Calendar from "./Data/Calendar";
import Carousel from "./Data/Carousel";
import Filters from "./Data/Filters";
import Pagination from "./Data/Pagination";
import Table from "./Data/Table";
import Tooltip from "./Data/Tooltip";
import Notification from "./Feedback/Notification";
import Message from "./Feedback/Message";
import Dialog from "./Others/Dialog";
import Loading from "./Others/Loading";
import Modal from "./Others/Modal";
import Panel from "./Others/Panel";
import Popover from "./Others/Popover";
import Progress from "./Others/Progress";
import Waffle from "./Others/Waffle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <Routes>
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/designprinciple" element={<Design />} />
        <Route path="/button" element={<Button />} />
        <Route path="/iconGallery" element={<IconGallery />} />
        <Route path="/icon" element={<Icon />} />
        <Route path="/commoni18nterms" element={<CommonI18 />} />
        <Route path="/commonproduct" element={<CommonProduct />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/breadcrumb" element={<Breadcrumb />} />
        <Route path="/navigationmenu" element={<NavMenu />} />
        <Route path="/navigatiommenulight" element={<NavMenuLight />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/wizard" element={<Wizard />} />
        <Route path="/autocomplete" element={<AutoComplete />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/checkbox" element={<Checkbox />} />
        <Route path="/datepicker" element={<DatePicker />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/expander" element={<Expander />} />
        <Route path="/Fileuploader" element={<FileUploader />} />
        <Route path="/input" element={<Input />} />
        <Route path="/peoplepicker" element={<PeoplePicker />} />
        <Route path="/radiobutton" element={<RadioButton />} />
        <Route path="/select" element={<Select />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/timepicker" element={<TimePicker />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/filter" element={<Filters />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/table" element={<Table />} />
        <Route path="/tooltip" element={<Tooltip />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/message" element={<Message />} />
        <Route path="/dialog" element={<Dialog />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/popover" element={<Popover />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/waffle" element={<Waffle />} />
      </Routes>
    </div>
  );
}

export default App;
