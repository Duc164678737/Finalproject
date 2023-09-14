import React, { useState } from "react";
import anh10 from "../assest/a10.png";
import anh11 from "../assest/a11.png";
import anh12 from "../assest/a12.png";
import anh13 from "../assest/a13.png";
import { Accordion, AccordionItem } from "@gui/fluent-ui-allure";

const Expander = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);

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
  return (
    <div className="system-intro">
      <div className="title margin-top-40">Expander</div>
      <p>
        Allow the user to toggle display a section of content which can optimize
        the use of vertical space.
      </p>

      <div className="margin-top-40 usage">Basic Usage</div>

      <div className="border-radius-1 padding-24">
      <Accordion defaultExpandedItems={["item1"]}>
            <AccordionItem itemKey="item1" headerText="About">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                <p />
                <Accordion size="small" defaultExpandedItems={["subItem1"]}>
                    <AccordionItem itemKey="subItem1" headerText="Child Title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim sequi, dolorem doloremque eum veniam quis inventore ex commodi mollitia alias perspiciatis voluptatum exercitationem obcaecati veritatis ab beatae reiciendis dolor.
                    </AccordionItem>
                </Accordion>
            </AccordionItem>
            
        </Accordion>
      </div>
      {hide && <img src={anh10} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore}
      >
        {!hide ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Uncontrolled multiple Large</div>

      <div className="border-radius-1 padding-24">
      <Accordion defaultExpandedItems={["item1"]}>
            <AccordionItem itemKey="item1" headerText="About">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                <p />
                <Accordion size="small" defaultExpandedItems={["subItem1"]}>
                    <AccordionItem itemKey="subItem1" headerText="Child Title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim sequi, dolorem doloremque eum veniam quis inventore ex commodi mollitia alias perspiciatis voluptatum exercitationem obcaecati veritatis ab beatae reiciendis dolor.
                    </AccordionItem>
                </Accordion>
            </AccordionItem>
            
        </Accordion>
        <Accordion defaultExpandedItems={["item1"]}>
            <AccordionItem itemKey="item1" headerText="About">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                <p />
                <Accordion size="small" defaultExpandedItems={["subItem1"]}>
                    <AccordionItem itemKey="subItem1" headerText="Child Title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim sequi, dolorem doloremque eum veniam quis inventore ex commodi mollitia alias perspiciatis voluptatum exercitationem obcaecati veritatis ab beatae reiciendis dolor.
                    </AccordionItem>
                </Accordion>
            </AccordionItem>
            
        </Accordion>
      </div>
      {hide2 && <img src={anh11} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore2}
      >
        {!hide2 ? "More" : "Less"}
      </button>

      <div className="margin-top-40 usage">Uncontrolled multiple small</div>

      <div className="border-radius-1 padding-24">
      <Accordion size="small" multiple defaultExpandedItems={["item1", "item2"]}>
            <AccordionItem itemKey="item1" headerText="Accordion Header 1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionItem>
            <AccordionItem itemKey="item2" headerText="Accordion Header 2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionItem>
            <AccordionItem itemKey="item3" headerText="Accordion Header 3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionItem>
        </Accordion>
      </div>
      {hide3 && <img src={anh12} alt="anh10" />}
      <button
        className="display-flex-2 border-radius-1 showMore"
        onClick={handleShowMore3}
      >
        {!hide3 ? "More" : "Less"}
      </button>
      <div className="margin-top-40 usage">Controlled</div>
      <div className="border-radius-1 padding-24"><Accordion size="small" multiple defaultExpandedItems={["item1", "item2"]}>
            <AccordionItem itemKey="item1" headerText="Accordion Header 1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionItem>
            <AccordionItem itemKey="item2" headerText="Accordion Header 2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionItem>
            <AccordionItem itemKey="item3" headerText="Accordion Header 3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionItem>
        </Accordion><Accordion size="small" multiple defaultExpandedItems={["item1", "item2"]}>
            <AccordionItem itemKey="item1" headerText="Accordion Header 1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionItem>
            <AccordionItem itemKey="item2" headerText="Accordion Header 2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionItem>
            <AccordionItem itemKey="item3" headerText="Accordion Header 3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionItem>
        </Accordion></div>
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

export default Expander;
