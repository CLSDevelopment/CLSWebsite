import React from "react";
import icon from "../../assets/icon/list-item-icon.svg";

import "./ListItem.scss";

type ListItemType = {
  data?: Array<any>;
};

export const ListItem: React.FC<ListItemType> = ({ data }) => {
  return (
    <div className="container-list-item">
      {(data || []).map((item, index) => (
        <div key={index} className="list-item">
          <img src={icon} className="icon-list-item" alt="icon-image" />
          <span className="list-item-title"> {item.title} </span>
        </div>
      ))}
    </div>
  );
};
