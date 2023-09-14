import React from "react";

import { ISearchBoxStyles, SearchBox, Stack, Pivot, PivotItem } from "@gui/fluent-ui-allure";
import { IStyleSet, Label, ILabelStyles } from '@fluentui/react';
import a27 from "../assest/a27.png";
import a28 from "../assest/a28.png";
import a29 from "../assest/a29.png";

const labelStyles: Partial<IStyleSet<ILabelStyles>>  = {
  root: { marginTop: 10 },
};

const IconGallery = () => {
  const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { height: 32 }, box: { width: 240 }, iconButton: { top: 4 } };
  return (
    <div className="system-intro">
      <div className="title">Icon Gallery</div>
      <p>
        This is a preview list of all three kinds of font icons. Allure font is
        customized by AvePoint, Font awesome is quoted from the Font Awesome
        library, and another Office UI fabric Icons are Microsoft font library.
      </p>
      <p>They all can be used in design according to different scenarios.</p>
      <Stack>
                <SearchBox styles={searchBoxStyles} showIcon placeholder="Search..." />
            </Stack>
            <Pivot
            overflowBehavior={'menu'}
            style={{ maxWidth: 210 }}
            aria-label="Basic Pivot Example">
            <PivotItem
                headerText="Tab 1"
                headerButtonProps={{
                    'data-order': 1,
                    'data-title': 'My Files Title',
                }}
            >
                <Label styles={labelStyles}>
      <img src={a27} alt="a27" />

                </Label>
            </PivotItem>
            <PivotItem headerText="Tab 2">
                <Label styles={labelStyles}>      <img src={a28} alt="a26" />
</Label>
            </PivotItem>
            <PivotItem headerText="Tab 3">
                <Label styles={labelStyles}>      <img src={a29} alt="a26" />
</Label>
            </PivotItem>
            
        </Pivot>
    </div>
  );
};

export default IconGallery;
