import "bootstrap/scss/bootstrap.scss";
import "slick-carousel/slick/slick.scss";
import { BackToTop, NavBar } from "components";

import "./PublicLayout.scss";

export const PublicLayout = (props) => {
  const { children } = props;

  return (
    <div id="public-contianer">
      <NavBar />
      {children}
      <BackToTop />
    </div>
  );
};
