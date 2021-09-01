import gif404 from "assets/images/gifcemifce.gif";
import { useEffect } from "react";
import "./notFound.scss"

export default () => {

  useEffect(() => {
    document.title = "Not Found"
  })

    return (
    <section className="not--found"> 
        <img className="gif--not--found" alt="not-found" src={gif404} />
        <div className="text--not--found">
          <h1>Not Found Page</h1>
          <a  href="/">Go to Home Page</a>
        </div>
      </section>
    )
}


