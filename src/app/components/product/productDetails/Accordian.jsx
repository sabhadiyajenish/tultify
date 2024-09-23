import React from "react";
import { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Collapse, Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const Accordian = ({ index }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      className="bg-[#7B6E62] rounded-[10px]"
    >
      <div
        className="flex justify-between items-center p-5 bg-[#7B6E62] h-[70px] rounded-[10px] cursor-pointer"
        onClick={() => handleToggle(index)}
      >
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          className="font-semibold text-[22px] leading-[26.66px] text-white"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        {openIndex === index ? (
          <IoMdRemove className="text-white w-[35px] h-[35px]" />
        ) : (
          <IoMdAdd className="text-white w-[35px] h-[35px]" />
        )}
      </div>
      <AccordionDetails className=" text-white text-start">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>
  );
};

export default Accordian;
