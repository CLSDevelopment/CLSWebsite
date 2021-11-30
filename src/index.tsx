import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { RouteSwitcher } from "components/RouterSwitcher/RouteSwitcher";

import "./i18n";
import "./index.scss";

const history = createBrowserHistory();

const GAImplementation = `
<script type="text/javascript">
(function(window, document, dataLayerName, id) {
function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
document.write('<script src="https://clearsightfinance.containers.piwik.pro/'+id+'.sync.js' + qPString + '"></' + 'script>');
})(window, document, 'dataLayer', '678e8667-357e-4024-b795-2df0248a71d2');
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
  
    
    </Helmet>
   <div dangerouslySetInnerHTML={{ __html: GAImplementation }}></div>
    <div dangerouslySetInnerHTML={{ __html: iubendaImplementation }}></div>
    <Switch>
      <RouteSwitcher path="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
