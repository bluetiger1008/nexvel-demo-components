import React from "react";
import PropTypes from "prop-types";

import Tabs from "./Tabs";
import Accordions from "./Accordions";

import "./Cases.css";

export interface NextvelCaseProps {
  mode: "desktop" | "mobile";
  data: {
    header: string;
    subHeader: string;
    subHeaderIcon: {
      sourceUrl: string;
      altText?: string;
    };
    cases: any;
  };
}

const Cases = (props: NextvelCaseProps) => {
  const { mode, data } = props;
  const { header, subHeader, subHeaderIcon, cases } = data;

  return (
    <div className="case__container">
      <div className="case__header">
        <h2>{header}</h2>
        <div className="case__subheading">
          {mode === "desktop" && (
            <img src={subHeaderIcon.sourceUrl} alt={subHeaderIcon.altText} />
          )}
          <span>{subHeader}</span>
        </div>
      </div>
      {(mode === "desktop" && <Tabs data={cases} />) ||
        (mode === "mobile" && <Accordions data={cases} />)}
    </div>
  );
};

export default Cases;
