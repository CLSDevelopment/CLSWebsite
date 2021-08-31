import React from "react" 
import arrowIcon from "../../assets/icon/arrow-platform-icon.svg";
import "./SkilsComponent.scss"


type SkilsProps = {
    listOfJobs: any
}



export const SkilsComponent: React.FC<SkilsProps> = ({listOfJobs}) => {

    return (
        <div className=" row item-conatiner">
        <div className="col-md-3 item-list-top">
          {listOfJobs.slice(0, 7).map((item, index) => (
            <p className="title-items" key={index}>
              <img className="list-img" src={arrowIcon} /> {item.job}
            </p>
          ))}
        </div>
        <div className="col-md-3  item-list">
          {listOfJobs.slice(7, 14).map((item, index) => (
            <p className="title-items" key={index}>
              <img className="list-img" src={arrowIcon} /> {item.job}
            </p>
          ))}
        </div>

        <div className="col-md-3  item-list">
          {listOfJobs.slice(14, 21).map((item, index) => (
            <p className="title-items" key={index}>
              <img className="list-img" src={arrowIcon} /> {item.job}
            </p>
          ))}
        </div>
        <div className="col-md-3  item-list-bottom">
          {listOfJobs.slice(21, 28).map((item, index) => (
            <p className="title-items" key={index}>
              <img className="list-img" src={arrowIcon} /> {item.job}
            </p>
          ))}
        </div>
      </div>
    )
}