import React from "react";
import Fade from "react-reveal/Fade"
type JobProps = {
  data: any;
  img: any;
};

export const ListItemJob: React.FC<JobProps> = ({ data, img }) => {
  return (
    <div className="container-tab-body">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <img className="image-tab-body" src={img} alt="tab-icon" />
        </div>
        <div className="col-sm-12 col-md-6 container-tab-body">
          <div className="row">
            {data.map((item, index) => (
              <Fade right>
              <div className="col" key={index}>
                <p className="option-text-body">{item.job}</p>
              </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
