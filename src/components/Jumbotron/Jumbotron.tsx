import React from "react";

import "./Jumbotron.scss";

type JumbtronProps = {
  img?: string;
  children: any;
  component?: any;
};

export const Jumbotron: React.FC<JumbtronProps> = ({
  img,
  children,
  component,
}) => {
  return (
    <div className="jumbotrom-component row">
      <div className="col-md-12 col-lg-6 jumbotrom-header">
        {img && <img className="jumbotrom-image" src={img} alt="jumbotrom"/>}
        {component && component}
      </div>
      <div className="col-md-12 col-lg-6 platform-body">{children}</div>
    </div>
  );
};
