import React from "react";
import { Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "./TabsForJobs.scss";

type TabsForJobsType = {
  data: any;
};

export const TabsForJobs: React.FC<TabsForJobsType> = ({ data }) => {
  return (
    <div className="container-tabs-jobs">
      <TabsComponent>
        <TabList>
          {data.map((item, index) => (
            <p className="title-tab">{item.heading}</p>
          ))}
        </TabList>
        {data.map(({ body }, i) => (
          <TabPanel key={i}>{body}</TabPanel>
        ))}
      </TabsComponent>
    </div>
  );
};
