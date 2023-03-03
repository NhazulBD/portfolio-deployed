import React, { Fragment } from "react";

export default function SectionContentLayout({ children }) {
  return (
    <Fragment>
      <div className="center-container">
        <div className="center-block">
          <div className="lower-content">
            <div className="container contents">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}