import React from "react";

import "./Jumbotron.scss";

type JumbtronProps = {
  img?: string;
  children: any;
  component?: any;
  sideComponent?: boolean;
};

export const Jumbotron: React.FC<JumbtronProps> = ({
  img,
  children,
  component,
  sideComponent,
}) => {
  const sideClass = [
    "col-md-12",
    "col-lg-6",
    "jumbotrom-header",
    sideComponent === true && "left-side",
  ];

  return (
    <div className="jumbotrom-component row">
      <div className={sideClass.join(" ")}>
        {img && <img className="jumbotrom-image" src={img} alt="jumbotrom" />}
        {component && component}
      </div>
      <div className="col-md-12 col-lg-6 platform-body">{children}</div>
    </div>
  );
};
