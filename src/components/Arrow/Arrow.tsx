import React from "react";

import "./Arrow.scss";

type ArrowProps = {
  color?: string;
  direction?: string;
};

export const Arrow: React.FC<ArrowProps> = (props) => {
  const { color = "#000", direction = "down" } = props;

  return (
    <svg
      className={`arrow-direction-${direction}`}
      height="30px"
      width="30px"
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        fill={color}
        points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "
      />
    </svg>
  );
};
