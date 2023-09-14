import React, { useState } from "react";
import anh17 from "../assest/a17.png";
import { Stack, Waffle as Waffles } from "@gui/fluent-ui-allure";
const Waffle = () => {
  const [hide, setHide] = useState(false);

  const handleShowMore = () => {
    setHide(!hide);
  };
  const cards = [
    {
        displayName: "AvePoint Online Services",
        isExpired: false,
        productIconBase64: "https://res.cdn.avepointonlineservices.com/onlineproductlogo/aos_32x32.png",
        productType: -1,
        url: "https://aos.sharepointguild.com/home/index",
    },
    {
        displayName: "Cloud Index",
        isExpired: false,
        productIconBase64: "https://res.cdn.avepointonlineservices.com/onlineproductlogo/cloud_index_32x32.png",
        productType: 19,
        url: "https://aos.sharepointguild.com/home/index",
    },
    {
        displayName: "Cloud Management",
        isExpired: false,
        productIconBase64: "https://res.cdn.avepointonlineservices.com/onlineproductlogo/cloud_management_32x32.png",
        productType: 12,
        url: "https://aos.sharepointguild.com/home/index",
    },
    {
        displayName: "Confide",
        isExpired: false,
        productIconBase64: "https://res.cdn.avepointonlineservices.com/onlineproductlogo/confide_32x32.png",
        productType: 28,
        url: "https://aos.sharepointguild.com/home/index"
    },
    {
        displayName: "FLY",
        isExpired: false,
        productIconBase64: "https://res.cdn.avepointonlineservices.com/onlineproductlogo/fly_32x32.png",
        productType: 24,
        url: "https://aos.sharepointguild.com/home/index",
    },
    {
        displayName: "IBM Spectrum Protect Plus Online Services for Microsoft 365",
        isExpired: false,
        productIconBase64: "https://res.cdn.avepointonlineservices.com/onlineproductlogo/cense_32x32.png",
        url: "https://aos.sharepointguild.com/home/index",
        hiddenIcon: true
    },
    {
        displayName: "Policy for Microsoft 365",
        isExpired: false,
        productIconBase64: "https://res.cdn.avepointonlineservices.com/onlineproductlogo/pi_32x32.png",
        productType: 23,
        url: "https://aos.sharepointguild.com/home/index",
    },
]

  return (
    <div className="system-intro">
      <div className="title">Waffle</div>
      <div>
        Online products can switch to other products easily. At least there will
        be one product: AOS. Don't display expired products in waffle.
      </div>

      <div className="margin-top-40 usage">Basic Usage</div>
      <div className="border-radius-1 padding-24">
      <Stack horizontal tokens={{ childrenGap: 16 }}>
            <Waffles
                productCards={cards}
                title={"Other online services"}
                height={430}
            />
        </Stack>
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

export default Waffle;
