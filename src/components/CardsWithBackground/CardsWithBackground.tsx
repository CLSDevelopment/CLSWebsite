import ShowMoreText from "react-show-more-text";
import image from "assets/images/card-with-bg-green.svg";
import image2 from "assets/images/card-with-bg-wallet.svg";
import image3 from "assets/images/card-with-bg-purple.svg";

import "./CardsWithBackground.scss";

export const CardWithBackground = () => {
  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  return (
    <div className="row container-card-background">
      <div className="col-sm-12 col-md-6 col-xl-4 card--container">
        <img src={image} alt="first-card" />
        <div className="card--content">
          <p className="card--name">Your Time is Your Own</p>
          <h4 className="card--text">
            <ShowMoreText
              /* Default options */
              lines={2}
              more="Read` more"
              less="Show less"
              className="content-css"
              anchorClass="my-anchor-css-class"
              onClick={executeOnClick}
              expanded={false}
              width={250}
              heigh={50}
              truncatedEndingComponent={"... "}
            >
              Unless you want it to be, there is no 9 to 5. If you're most
              productive between the hours of 2 a.m. and 6 a.m., You can work
              between 6 a.m. and 8 a.m. If your clients expect you to be
              available from 9 a.m. to 5 p.m., you can always justify absences
              as "client meetings"—who's going to notice?
            </ShowMoreText>
          </h4>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-4 card--container">
        <img src={image2} alt="second-card" />
        <div className="card--content">
          <p className="card--name">You’re Free to Work Anywhere – Freedom</p>
          <h4 className="card--text">
            <ShowMoreText
              lines={2}
              more="Read more"
              less="Show less"
              className="content-css"
              anchorClass="my-anchor-css-class"
              onClick={executeOnClick}
              expanded={false}
              width={250}
              truncatedEndingComponent={"... "}
            >
              The author has worked in hotel rooms, apartments, coffee shops,
              poolside, and other unusual locations. You're the boss, and you
              get to choose where you work as long as the task is done. Your
              clients pay for your services, yet they have no say in where you
              operate.
            </ShowMoreText>
          </h4>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-4 card--container">
        <img src={image3} alt="third-card" />
        <div className="card--content">
          <p className="card--name">The End of Office Politics</p>
          <h4 className="card--text">
            <ShowMoreText
              lines={2}
              more="Read more"
              less="Show less"
              className="content-css"
              anchorClass="my-anchor-css-class"
              // onClick={executeOnClick}
              expanded={false}
              width={250}
              truncatedEndingComponent={"... "}
            >
              Politics in the workplace has a nasty knack of making people
              miserable. Having to play for favour between conflicting bosses or
              competing teams, according to many employees, is the worst part of
              their job. Fortunately, you can say goodbye to workplace politics
              forever the day you start working for yourself
            </ShowMoreText>
          </h4>
        </div>
      </div>
    </div>
  );
};
