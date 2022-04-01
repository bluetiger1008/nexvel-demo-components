import React from "react"
import Accordion from "./accordion"

import "./CaseAccordion.css"

export interface CaseData {
  caseTitle: string;
  caseSubtitle: string;
  caseContent: string;
  caseIcon: {
    altText: string;
    sourceUrl: string;
  };
  caseImage: {
    altText: string;
    sourceUrl: string;
  };
  caseLearnMore: {
    url: string;
    title: string;
    target: string;
  };
  caseFreeEvaluation: {
    url: string;
    title: string;
    target: string;
  };
}

export interface CaseAccordionProps {
  data: CaseData[];
}

const CaseAccordion = (prps: CaseAccordionProps) => {
  const { data } = prps

  return <Accordion cases={ data } />
}

export default CaseAccordion;
