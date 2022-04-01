import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import { CaseData } from "../Accordions/CaseAccordion";
import "./CaseTabs.css";

export interface CaseTabProps {
  data: CaseData[];
}

const CaseTab = (props: CaseTabProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const { data } = props;

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index: number) => setTabIndex(index)}
    >
      <TabList>
        {data.map((item, index) => {
          return (
            <Tab key={index} onClick={() => setTabIndex(index)}>
              <div className="icon-wrapper">
                <img
                  src={item.caseIcon.sourceUrl}
                  alt={item.caseIcon.altText}
                />
              </div>
              <span>{item.caseTitle}</span>
            </Tab>
          );
        })}
      </TabList>

      {data.map((item, index) => {
        return (
          <TabPanel key={index}>
            <div className="tab-panel-container">
              <div className="tab-panel-header">
                <h3>{item.caseTitle}</h3>
                <div className="tab-panel-header-divider"></div>
                <h4>{item.caseSubtitle}</h4>
              </div>
              <div className="tab-panel-content">
                <div className="featured-image">
                  <img
                    src={item.caseImage.sourceUrl}
                    alt={item.caseImage.altText}
                  />
                </div>
                <p dangerouslySetInnerHTML={{ __html: item.caseContent }} />
              </div>
              <div className="tab-panel-footer">
                <div className="button-wrapper">
                  <a className="button unfilled" href={item.caseLearnMore.url}>
                    {item.caseLearnMore.title}
                  </a>
                  <a
                    className="button filled"
                    href={item.caseFreeEvaluation.url}
                  >
                    {item.caseFreeEvaluation.title}
                  </a>
                </div>
              </div>
            </div>
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

export default CaseTab;
