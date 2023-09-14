import React, { useState } from "react";
import anh10 from "../assest/a10.png";
import anh11 from "../assest/a11.png";
import anh12 from "../assest/a12.png";
import anh13 from "../assest/a13.png";
import { Stack, DefaultButton, PrimaryButton, Link, TextButton, DashedButton , IconButton,  Toggle, TooltipHost, IContextualMenuProps  } from "@gui/fluent-ui-allure";

const Button = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);
  const [enableFocus, setEnableFocus] = React.useState(false);
  const [busy, setBusy] = React.useState(false);

  const handleShowMore = () => {
    setHide(!hide);
  };

  const handleShowMore2 = () => {
    setHide2(!hide2);
  };

  const handleShowMore3 = () => {
    setHide3(!hide3);
  };

  const handleShowMore4 = () => {
    setHide4(!hide4);
  };

  const menuProps: IContextualMenuProps = {
    items: [
        {
            key: "k1",
            text: "Email message",
            iconProps: { iconName: "fas-envelope" },
        },
        {
            key: "k2",
            text: "Calendar event",
            iconProps: { iconName: "fas-calendar-days" },
            subMenuProps: {
                calloutProps: {
                    gapSpace: 5
                },
                gapSpace: 5,
                items: [
                    {
                        key: "k2-1",
                        text: "Meeting",
                        iconProps: { iconName: "fas-envelope" },
                    },
                    {
                        key: "k2-2",
                        text: "Startup",
                        iconProps: { iconName: "fas-envelope" },
                    },
                ]
            }
        },
    ],
    directionalHintFixed: true,
};
  return (
    <div className="system-intro">
      <div className="title margin-top-40">Button</div>
      <p>Use Button to perform a specific action.</p>
      <div className="margin-top-40 usage">When to use</div>
      <p>
        Use Primary buttons in situations where uers may need to:
        <ul>
          <li>Submit a form (Submit , Apply, Save, OK, Cancel, Close)</li>
          <li>
            Begin a new task (Start, Create) - Specify a new or next step in a
            process (Back, Next)
          </li>
          <li>Others which are important</li>
        </ul>
        Primary button always on the right . Please refer to principle Gutenburg
        diagram
        (https://3.7designs.co/blog/2009/01/03/the-gutenburg-diagram-in-design/)
      </p>
      <div className="margin-top-40 usage">Basic Usage</div>
      <p>
        Buttons are clickable items used to perform an action. It is better to
        make the recommended action on the page to be the primary button. In
        general, a button always has these five statuses: normal, hover,
        clicked, focused and disabled.
      </p>
      <div className="border-radius-1 padding-24">
      <Stack horizontal tokens={{ childrenGap: 16 }}>
            <TextButton title="Normal Button">Normal button</TextButton>

            <DefaultButton>Outline</DefaultButton>

            <PrimaryButton>Filled Button</PrimaryButton>

            <DashedButton>Dashed button</DashedButton>

            <Link underline>Link button</Link>

            
        </Stack>
      </div>
      {hide && <img src={anh10} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Disable</div>
      <div className="border-radius-1 padding-24">
      <Stack>
            <Toggle
                checked={enableFocus}
                onChange={(_, checked) => {
                    setEnableFocus(true);
                }}
                label="Enable focus on disabled buttons"
                inlineLabel
            />
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <TooltipHost content="This button is disabled because we set disabled property">
                    <TextButton allowDisabledFocus={enableFocus} disabled>
                        Normal button
                    </TextButton>
                </TooltipHost>
                <TooltipHost content="This button is disabled because we set disabled property">
                    <DefaultButton allowDisabledFocus={enableFocus} disabled>
                        Outline
                    </DefaultButton>
                </TooltipHost>
                <TooltipHost content="This button is disabled because we set disabled property">
                    <DefaultButton allowDisabledFocus={enableFocus} disabled iconProps={{ iconName: "fas-rotate-right" }}>
                        Outline
                    </DefaultButton>
                </TooltipHost>
                <TooltipHost content="This button is disabled because we set disabled property">
                    <PrimaryButton allowDisabledFocus={enableFocus} disabled>
                        Filled button
                    </PrimaryButton>
                </TooltipHost>
                <TooltipHost content="This button is disabled because we set disabled property">
                    <PrimaryButton allowDisabledFocus={enableFocus} disabled iconProps={{ iconName: "fas-rotate-right" }}>
                        Filled button
                    </PrimaryButton>
                </TooltipHost>
                <TooltipHost styles={{ root: {display: 'flex !important'}}} content="This button is disabled because we set disabled property">
                    <Link disabled>Link button</Link>
                </TooltipHost>{" "}
                {/*disabled link doesn't support get focus */}
                <TooltipHost content="This button is disabled because we set disabled property">
                    <DashedButton allowDisabledFocus={enableFocus} disabled>
                        Dashed button
                    </DashedButton>
                </TooltipHost>
                <TooltipHost content="This button is disabled because we set disabled property">
                    <IconButton allowDisabledFocus={enableFocus} bordered disabled iconProps={{ iconName: "fas-bell" }}></IconButton>
                </TooltipHost>
            </Stack>
        </Stack>
      </div>
      {hide2 && <img src={anh11} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore2}
      >
        {!hide2 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Icon Button</div>
      <div className="border-radius-1 padding-24">
      <Stack horizontal tokens={{ childrenGap: 16 }}>
            <DefaultButton iconProps={{ iconName: "fas-rotate-right" }}>Outline</DefaultButton>

            <PrimaryButton iconProps={{ iconName: "fas-rotate-right" }}>Filled button</PrimaryButton>

            <DashedButton iconProps={{ iconName: "fas-plus" }}>Dashed button</DashedButton>

            <IconButton bordered iconProps={{ iconName: "fas-layer-group" }}></IconButton>


            <TextButton style={{minWidth: 0}} iconProps={{ iconName: "fas-layer-group" }}></TextButton>
        </Stack>
      </div>
      {hide3 && <img src={anh12} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore3}
      >
        {!hide3 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Context Menu</div>
      <div className="border-radius-1 padding-24"><Stack horizontal tokens={{ childrenGap: 16 }}>
            <DefaultButton menuProps={menuProps}>Outline</DefaultButton>

            <DefaultButton iconProps={{ iconName: "fas-rotate-right" }} menuProps={menuProps}>Outline</DefaultButton>


            <PrimaryButton menuProps={menuProps}>Button Group</PrimaryButton>

            <IconButton bordered iconProps={{ iconName: "fas-ellipsis" }} menuProps={menuProps} styles={{ menuIcon: { display: "none" } }}></IconButton>
        </Stack></div>
      {hide4 && <img src={anh13} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore4}
      >
        {!hide4 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Loading</div>
      <div className="border-radius-1 padding-24">
      <Stack tokens={{childrenGap: 16}}>
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <PrimaryButton busy={busy}>Filled button</PrimaryButton>
                <PrimaryButton busy={busy} iconProps={{ iconName: "fas-rotate-right" }}>
                    Filled button
                </PrimaryButton>

                <DefaultButton busy={busy} iconProps={{ iconName: "fas-rotate-right" }}>
                    Outline
                </DefaultButton>

                <IconButton busy={busy} bordered iconProps={{ iconName: "fas-bell" }}></IconButton>

                {/* <TextButton busy={busy} iconProps={{ iconName: "fas-rotate-right" }}>Text Button</TextButton> */}

                {/* <DashedButton  busy={busy} iconProps={{ iconName: "fas-rotate-right" }}>Dashed Button</DashedButton> */}

                <PrimaryButton onClick={() => setBusy(!busy)}>Toggle Busy</PrimaryButton>
            </Stack>
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <PrimaryButton busy={busy} busyText="Loading">Filled button</PrimaryButton>
                <PrimaryButton busy={busy} busyText="Loading" iconProps={{ iconName: "fas-rotate-right" }}>
                    Filled button
                </PrimaryButton>

                <DefaultButton busy={busy} busyText="Loading" iconProps={{ iconName: "fas-rotate-right" }}>
                    Outline
                </DefaultButton>

                {/* <TextButton busy={busy} busyText="Loading" iconProps={{ iconName: "fas-rotate-right" }}>Text Button</TextButton> */}

                {/* <DashedButton  busy={busy} busyText="Loading" iconProps={{ iconName: "fas-rotate-right" }}>Dashed Button</DashedButton> */}

            </Stack>
        </Stack>
      </div>
      {hide4 && <img src={anh13} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore4}
      >
        {!hide4 ? "More" : "Less"}
      </button>
    </div>
  );
};

export default Button;
