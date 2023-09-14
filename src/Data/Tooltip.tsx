import React, { useState } from "react";
import anh17 from "../assest/a17.png";
import { DefaultButton, Tooltip as ToolTip, TooltipHost, Stack } from '@gui/fluent-ui-allure';


const Tooltip = () => {
  const [hide, setHide] = useState(false);

  const handleShowMore = () => {
    setHide(!hide);
  };
  const [tooltipContent, setTooltipContent] = React.useState<string>('');

    function onTooltipToggle(visible: boolean) {
        if (!visible) {
            setTooltipContent('');
        }
    }

  return (
    <div className="system-intro">
      <div className="title">Tooltip</div>
      <div>
        A good tooltip briefly describes unlabeled controls or provides a bit of
        additional information about labeled controls, when this is useful.
      </div>

      <div className="margin-top-40 usage">Basic Usage</div>
      <div>
        For an icon without text, a dot in a chart, a disabled reason for some
        action, table key column all can use a tooltip.
      </div>
      <div className="border-radius-1 padding-24">
      <Stack horizontal tokens={{childrenGap: 20}}>
            <TooltipHost content={<div>This is <br /> tooltip.</div>}>
                <DefaultButton>Hover me</DefaultButton>
            </TooltipHost>

            <TooltipHost content="This is tooltip.">
                <DefaultButton disabled>Hover this disabled button</DefaultButton>
            </TooltipHost>
            
            <TooltipHost onTooltipToggle={visible => onTooltipToggle(visible)} content={tooltipContent}>
                <DefaultButton onClick={() => setTooltipContent('This is tooltip.')}>Click me</DefaultButton>
            </TooltipHost>
            
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

export default Tooltip;
