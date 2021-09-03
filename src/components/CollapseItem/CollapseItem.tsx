import React, { useState } from "react";
import { Arrow } from "../Arrow/Arrow";

import "./CollapseItem.scss";

type CollapseItemType = {
  number: string;
  title: string;
  description: string;
};

export const CollapseItem: React.FC<CollapseItemType> = ({
  title,
  description,
  number,
}) => {
  const [setActive, setActiveState] = useState("");

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
  };

  return (
    <div className="container--collapse">
      <h1 className="collapse--title" onClick={toggleAccordion}>
        <span className="collapse--number">{number}</span> {title}
        <Arrow direction={setActive === "active" ? "up" : "down"} />
      </h1>
      <p className={`collapse--description accordion ${setActive}`}>
        {description}
      </p>
    </div>
  );
};
