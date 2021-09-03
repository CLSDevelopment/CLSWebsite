import FooterLogo from "assets/icon/logo-footer.png";
import { useTranslation } from "react-i18next";
import { Wave } from "../Wave/Wave";

import "./Footer.scss";

export const Footer = () => {

  const {t} = useTranslation("home")

  return (
    <>
      <Wave colorFirstWave={"#051047"} direction={"0"} />
      <div className="container--footer">
        <div className="row row--footer">
          <div className="col-12 col-md-6 col-xl-4 col--footer">
            <img
              src={FooterLogo}
              alt="clearsight-logo"
              className="footer-logo"
            />
            <p className="footer--description">
              {t("footer-description")}
            </p>
            <div className="container-social-media">
              <a href="https://www.facebook.com/clearsight.finance" target="_blank" rel="noreferrer" className="fa fa-facebook round" />
              <a className="fa fa-twitter round" />
              <a href="https://t.me/clearsightfinance" target="_blank" className="fa fa-telegram round" />
            </div>
          </div>
          <div className="col-6 col-md-6 col-xl-2 footer--menu">
            <h1 className="foooter--menu--title">{t("link-title")}</h1>

            <ul>
              <li>
                <a href="/home">{t("home")}</a>
              </li>
              <li>
                <a href="/wallet">{t("wallet")}</a>
              </li>
              <li>
                <a href="/platform">{t("platform")}</a>
              </li>
              <li>
                <a href="/debit-card">{t("debitcard")}</a>
              </li>
              <li>
                <a href="/information">{t("information")}</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-xl-2 footer--menu">
            <h1 className="foooter--menu--title">{t("footer-menu-title-inf")}</h1>
            <ul>
              <li>
                <i className="fa fa-file-text-o" aria-hidden="true"></i>
                <a
                  href="https://drive.google.com/file/d/1IA27S3gRBxBktVMCak-AApbhMGiAJm2s/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                 {t("whitepaper")}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-xl-4 footer--menu">
            <h1 className="foooter--menu--title">{t("footer-menu-title-cont")}</h1>
            <ul>
              <li>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <a href="mailto: admin@clearsight.finance">{t("mail")}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row row--footer row--footer--terms">
          <div className="col-md-12 col-lg-6 col--footer--copy-right">
            <p className="copy-right">
             {t("copy-right")}
            </p>
          </div>
          <div className="col-md-12 col-lg-6 col--footer--terms-cond">
            <p className="terms-cond">
              <a
                href="https://www.iubenda.com/terms-and-conditions/49402867"
                target="_blank"
                rel="noreferrer"
              >
                {t("terms-conditions")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
