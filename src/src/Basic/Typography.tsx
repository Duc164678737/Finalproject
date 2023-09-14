import React, { useState } from "react";
import anh3 from "../assest/a3.png";
import { Link, Stack, Text, SecondaryText, HeadingText, PageHeaderText, HeadingType } from "@gui/fluent-ui-allure";

const Typography = () => {
  const [hide, setHide] = useState(false);
  const handleShowMore = () => {
    setHide(!hide);
  };

  return (
    <div className="system-intro">
      <div className="title">Typography</div>
      <div>
        This is a component for displaying text. You can use this to standardize
        text across your system.
      </div>
      <div className="usage margin-top-40">
        Letter Spacing
      </div>
        <div>{`-15 (-0.015rem)`}</div>
      <div className="usage margin-top-40">Font Convention</div>
      <div className="border-radius-1 padding-24">
      <Stack horizontal tokens={{childrenGap: 120}}>
            <Stack tokens={{ childrenGap: 10 }}>
                <PageHeaderText block>Page Header Title</PageHeaderText>
                <HeadingText type={HeadingType.LargeBold} block>
                    Heading large bold
                </HeadingText>
                <HeadingText type={HeadingType.MediumBold} block>
                    Heading medium bold
                </HeadingText>
                {/* <HeadingText type={HeadingType.DefaultBold} block>
                Heading default bold
            </HeadingText> */}
                <HeadingText type={HeadingType.Semibold} block>
                    Semibold Heading
                </HeadingText>
                <Text block>Default body</Text>
                <SecondaryText block>Secondary text</SecondaryText>
                {/* <Link underline>Text link</Link> */}
            </Stack>
            <Stack tokens={{ childrenGap: 10 }}>
                <PageHeaderText block>23px, regular</PageHeaderText>
                <HeadingText type={HeadingType.LargeBold} block>
                    18px, bold
                </HeadingText>
                <HeadingText type={HeadingType.MediumBold} block>
                    16px, bold
                </HeadingText>
                {/* <HeadingText type={HeadingType.DefaultBold} block>
                Heading default bold
            </HeadingText> */}
                <HeadingText type={HeadingType.Semibold} block>
                    14px, semibold
                </HeadingText>
                <Text block>14px, regular</Text>
                <SecondaryText block>14px, italic</SecondaryText>
                {/* <Link underline>Text link</Link> */}
            </Stack>
            <Stack tokens={{ childrenGap: 10 }}>
                <PageHeaderText block>Breadcrumb</PageHeaderText>
                <HeadingText type={HeadingType.LargeBold} block>
                    Calendar Month/Year
                </HeadingText>
                <HeadingText type={HeadingType.MediumBold} block>
                    Panel and popup title
                </HeadingText>
                {/* <HeadingText type={HeadingType.DefaultBold} block>
                Heading default bold
            </HeadingText> */}
                <HeadingText type={HeadingType.Semibold} block>
                    Label title, table column name, action
                </HeadingText>
                <Text block>Body</Text>
                <SecondaryText block>Description, watermark</SecondaryText>
                {/* <Link underline>Text link</Link> */}
            </Stack>
        </Stack>
      </div>

      {hide && <img src={anh3} alt="anh3" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
    </div>
  );
};

export default Typography;
