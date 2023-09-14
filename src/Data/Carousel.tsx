import React, { useState } from "react";
import anh17 from "../assest/a17.png";
import { SampleBasic } from "./SampleBasic";

const Carousel = () => {
  const [hide, setHide] = useState(false);

  const handleShowMore = () => {
    setHide(!hide);
  };

  return (
    <div className="system-intro">
      <div className="title">Carousel</div>
      <div>
        A carousel allows multiple images to loop play in a fixed-size space.
      </div>

      <div className="margin-top-40 usage">Basic Usage</div>
      <div>
        A carousel is used to display a set of flat images. The maximum
        recommended number is 5 images and only shows one image at a time. It
        switches automatically every 3 seconds, or you can switch it manually
        with an indicator below. This indicator can also indicate the total
        number of images, and which one is currently being displayed.
      </div>
      <div className="border-radius-1 padding-24"><SampleBasic/></div>
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

export default Carousel;
