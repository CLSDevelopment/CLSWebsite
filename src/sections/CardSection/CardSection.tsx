import React from "react";

import "./CardSection.scss";

type CardsProps = {
  children: any;
  title: string;
  textArea?: string;
  description: string;
};

export const CardsSection: React.FC<CardsProps> = ({
  children,
  title,
  description,
  textArea,
}) => {
  return (
    <>
      <div className="cards-section">
        <div className="card-title">
          <p className="title">{title}</p>
          <h1 className="description">{description}</h1>
          {textArea && <p className="card-text-area">{textArea}</p>}
        </div>
        <div className="card-body">{children}</div>
      </div>
    </>
  );
};
