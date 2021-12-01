import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { RouteSwitcher } from "components/RouterSwitcher/RouteSwitcher";

import "./i18n";
import "./index.scss";

const history = createBrowserHistory();

const GAImplementation = `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-203923409-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-203923409-1');
</script>

`;

const iubendaImplementation = `
<script type="text/javascript">
var _iub = _iub || [];
_iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"whitelabel":false,"lang":"en","siteId":2315787,"enableCcpa":true,"countryDetection":true,"enableCMP":true,"googleAdditionalConsentMode":true,"cookiePolicyId":49402867, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"position":"float-bottom-center","acceptButtonColor":"#0073CE","acceptButtonCaptionColor":"white","customizeButtonColor":"#f14e22","customizeButtonCaptionColor":"white","textColor":"#010000","backgroundColor":"#ffffff","rejectButtonDisplay":true,"rejectButtonColor":"#0073CE","rejectButtonCaptionColor":"white" }};
</script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/tcf/stub-v2.js"></script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"></script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>

`;

ReactDOM.render(
  <Router history={history}>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
 <div dangerouslySetInnerHTML={{ __html: GAImplementation }}></div>
    
    </Helmet>

    <div dangerouslySetInnerHTML={{ __html: iubendaImplementation }}></div>
   
    <Switch>
      <RouteSwitcher path="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
