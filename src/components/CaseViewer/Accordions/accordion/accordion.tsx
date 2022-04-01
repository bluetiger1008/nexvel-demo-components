import React, { useState } from "react"
import AccordionItem from "./accordionItem"
import { CaseData } from "../CaseAccordion";

export interface AccordionProps {
  cases: CaseData[];
}

const Accordion = (props: AccordionProps) => {
  const { cases } = props;
  const [activeTab, setActiveTab] = useState(0)

  const handleAccordion = (index: number) => {
    setActiveTab(activeTab === index ? -1 : index)
  }

  return (
    <div className="accordion" role="tablist">
      {cases.map((ca, index) => (
        <AccordionItem
          key={index}
          activeTab={activeTab}
          index={index}
          data={ca}
          handleAccordion={handleAccordion}
        />
      ))}
    </div>
  )
}

export default Accordion