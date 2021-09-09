import { Helmet } from "react-helmet";
import "bootstrap/scss/bootstrap.scss";
import "slick-carousel/slick/slick.scss";

import { BackToTop, NavBar } from "components";

import "./PublicLayout.scss";

export const PublicLayout = (props) => {
  const { children } = props;
  const rightToLeft = "rtl";

  return (
    <>
      <Helmet>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SC3JZRM40X"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SC3JZRM40X');
              `,
          }}
        />
      </Helmet>
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
