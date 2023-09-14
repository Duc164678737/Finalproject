import React, { useState } from "react";
import anh3 from "../assest/a3.png";
import { PrimaryButton, DefaultButton, Dialog, DialogFooter, Label, Stack, ChoiceGroup, IChoiceGroupOption, Checkbox, DialogType } from "@gui/fluent-ui-allure";

const Modal = () => {
  const [hide, setHide] = useState(false);
  const [isModalClosed, setModalClosed] = React.useState(true);
  const handleShowMore = () => {
    setHide(!hide);
  };

  return (
    <div className="system-intro">
      <div className="title">Modal</div>
      <div>
        Modals take focus from the page or app and require people to interact
        with them. Unlike a dialog, a modal should be used for hosting lengthy
        content, Such as asking people to perform complex or multiple actions.
      </div>
      <div className="usage margin-top-40">Basic Usage</div>
      <div>
        1. Provide system feedback after performing an action such as: updating
        successfully, deleting successfully, etc.
      </div>
      <div>
        2. The Newest one is on the top. A maximum of 4 messages can be
        displayed at the same time.s
      </div>
      <div>
        3. Feedback will auto close in 5 seconds. Users can also close manually
        by clicking "X".
      </div>

      <div className="border-radius-1 padding-24">
      <DefaultButton onClick={() => setModalClosed(false)}>Open modal</DefaultButton>
            <Dialog
                hidden={isModalClosed}
                onDismiss={() => setModalClosed(true)}
                dialogContentProps={{ showCloseButton: true, type: DialogType.close }}
                title="Modal heading"
                maxWidth="480px"
                minWidth="480px"
            >
                <div style={{ maxHeight: 150 }}>
                    <Label required>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Label>
                    <Stack tokens={{ childrenGap: 6 }}>
                        <Checkbox label="Option A" />
                        <Checkbox label="Option B" />
                        <Checkbox label="Option C" />
                        <Checkbox label="Option D" />
                    </Stack>
                </div>
                <DialogFooter>
                    <DefaultButton onClick={() => setModalClosed(true)}>Cancel</DefaultButton>
                    <PrimaryButton onClick={() => setModalClosed(true)}>Submit</PrimaryButton>
                </DialogFooter>
            </Dialog>
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

export default Modal;
