import { BackToTop, NavBar } from 'components';
import 'bootstrap/scss/bootstrap.scss';
import 'slick-carousel/slick/slick.scss';
import Helmet from "react-helmet";
import './PublicLayout.scss';

export const PublicLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <div>
        <NavBar />
        {children}
        <BackToTop />
      </div>
    </>
  );
};
