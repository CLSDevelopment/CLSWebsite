import "bootstrap/scss/bootstrap.scss";
import "slick-carousel/slick/slick.scss";
import { BackToTop, NavBar } from "components";

import "./PublicLayout.scss";

export const PublicLayout = (props) => {
  const { children } = props;
  const rightToLeft = "rtl";

  return (
    <>
      {localStorage.getItem("language") === "AE" ? (
        <div id="public-contianer" dir={rightToLeft}>
          <NavBar />
          {children}
          <BackToTop />
        </div>
      ) : (
        <div id="public-contianer">
          <NavBar />
          {children}
          <BackToTop />
        </div>
      )}
    </>
  );
};
