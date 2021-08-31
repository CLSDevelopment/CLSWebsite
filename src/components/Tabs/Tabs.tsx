import React from "react";
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";

import "./Tabs.scss";

type TabsType = {
  data?: any;
};

export const Tabs: React.FC<TabsType> = ( {data} ) => {
  return (
    <div className="container-tabs">
      <TabsComponent>
        <TabList>
          {data.map((item, index) => (
            <Tab key={index}>
              <img src={item.icon} alt={"image" + index} />

              <p className="title-tab">{item.heading}</p>
            </Tab>
          ))}
        </TabList>
        {data.map(({ body }, i) => (
          <TabPanel key={i}>{body}</TabPanel>
        ))}
      </TabsComponent>
    </div>
  );
};
