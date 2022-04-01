import React, { useState, useEffect, useRef } from "react";
import { CaseData } from "../CaseAccordion";

export interface AccordionItemProps {
  activeTab: number;
  index: number;
  handleAccordion: (index: number) => void;
  data: CaseData;
}

const AccordionItem = (props: AccordionItemProps) => {
  const { data, activeTab, index, handleAccordion } = props;
  const [height, setHeight] = useState(0);

  const isActive = activeTab === index;
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const panelContainer = panelRef.current;
    if (panelContainer) setHeight(panelContainer.scrollHeight);
  }, []);

  const innerStyle = {
    height: `${isActive ? height : 0}px`,
  };

  return (
    <div className="panel" role="tabpanel" aria-expanded={isActive}>
      <button
        className="panel__title"
        role="tab"
        onClick={() => handleAccordion(index)}
      >
        <div className="icon-wrapper">
          <img src={data?.caseIcon.sourceUrl} alt={data?.caseIcon?.altText} />
          {/* <GatsbyImage image={icon} alt={data.caseIcon.altText} /> */}
        </div>
        <span className="panel__label">{data?.caseTitle}</span>
        <span className="exp-icon"></span>
      </button>
      <div
        className="panel__inner"
        ref={panelRef}
        style={innerStyle}
        aria-hidden={!isActive}
      >
        <div className="panel-container">
          <div className="panel-header">
            <h3>{data?.caseTitle}</h3>
            <h4>{data?.caseSubtitle}</h4>
          </div>
          <div className="panel-content">
            <div className="featured-image">
              <img
                src={data?.caseImage.sourceUrl}
                alt={data?.caseImage.altText}
              />
            </div>
            <p dangerouslySetInnerHTML={{ __html: data?.caseContent }} />
          </div>
          <div className="panel-footer">
            <div className="button-wrapper">
              <a className="button unfilled" href={data?.caseLearnMore.url}>
                {data?.caseLearnMore.title}
              </a>
              <a className="button filled" href={data?.caseFreeEvaluation.url}>
                {data?.caseFreeEvaluation.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
