import { useEffect } from "react";
import { PublicLayout } from "layouts/PublicLayout/PublicLayout";
import gif404 from "assets/images/gifcemifce.gif";

import "./notFound.scss";


export default () => {
  useEffect(() => {
    document.title = "Not Found";
  });

  return (
    <PublicLayout>
      <section className="not--found">
        <img className="gif--not--found" alt="not-found" src={gif404} />
        <div className="text--not--found">
          <h1>Not Found Page</h1>
          <a href="/">Go to Home Page</a>
        </div>
      </section>
    </PublicLayout>
  );
};
