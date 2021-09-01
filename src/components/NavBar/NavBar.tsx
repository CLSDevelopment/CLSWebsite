import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "components/LanguageSwitcher/LanguageSwitcher";
import closeImg from "../../assets/images/close.svg";
import logo from "../../assets/images/logo.svg";
import logoWhite from "../../assets/icon/logo-footer.png";

import "./NavBar.scss";

export const NavBar = () => {
  const { t } = useTranslation("home");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [expanded, setExpended] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const navbarContainer = [
    "container--custom--navbar",
    !!scrollPosition && "style-scroll-shadow",
  ];

  const navbarClasses = [
    "navbar",
    "fixed-top",
    "navbar-expand-xl",
    !!scrollPosition && "scroll-shadow",
  ];

  const navbarCollapseClasses = [
    "collapse",
    "navbar-collapse",
    "navbar-collapse-custom",
    expanded && "show",
  ];

  const navbarButton = [
    "cliersight-menu-right",
    !!scrollPosition && "link-color",
  ];

  const navbarBurgerMenu = [
    "hamburger-icon",
    !!scrollPosition && "button-hamburge-menu",
  ];

  const toggleExpand = () => {
    if (window.innerWidth < 1199) {
      if (!expanded) {
        setExpended(!expanded);

        return (document.body.style.overflowY = "hidden");
      }
      const inputTag = document.getElementById(
        "navbarSupportedContent"
      ) as HTMLInputElement;
      inputTag.style.overflowY = "hidden";
      inputTag.style.overflowX = "hiidden";

      document.body.style.overflowY = "scroll";

      setExpended(!expanded);
    }
    setExpended(false);
  };

  const handleScroll = (event) => {
    if (window) {
      setScrollPosition(window.scrollY);
    }
  };

  // function changebackground(color){
  //   document.getElementById('das').style.backgroundColor = color;
  // }
   

  useEffect(() => {
    if (window.scrollY) {
      const inputTag = document.getElementById(
        "container_scroll_y"
      ) as HTMLInputElement;
      inputTag.style.background = "white";
  }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={navbarContainer.join(" ")} id="container_scroll_y">
      <nav className={navbarClasses.join(" ")} id="scroll_y">
        <div className="mr-auto">
          <a href="/" className="navbar-brand clearsight-logo">
            <img src={logo} alt="clearsight" className="logo-destop" />
            <img
              src={!!scrollPosition ? logo : logoWhite}
              className="logo-mobile"
              alt="clearsight"
            />
          </a>
        </div>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={toggleExpand}
        >
          <span className={navbarBurgerMenu.join(" ")} title="Menu">
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </span>
        </button>

        <div
          className={navbarCollapseClasses.join(" ")}
          id="navbarSupportedContent"
        >
          <div className="navbar-toggler-container">
            {expanded && (
              <img
                className="navbar-close-button"
                src={closeImg}
                alt="close"
                onClick={toggleExpand}
              />
            )}
          </div>
          <div className="hamb-menu-logo">
            <img src={logoWhite} width={"150px"}  alt="clearsight"/>
            <div className="lng-switcher">
              <LanguageSwitcher />
            </div>
          </div>

   
            <ul className="navbar-nav ml-auto">
              <li className={navbarButton.join(" ")} onClick={toggleExpand}>
                <Link to={"/home"}>
                  <span
                    className={
                      window.location.pathname === "/home"
                        ? "active"
                        : "no-active"
                    }
                  >
                    {t("home")}
                  </span>
                </Link>
              </li>
              <li className={navbarButton.join(" ")} onClick={toggleExpand}>
                <Link to="/wallet">
                  <span
                    className={
                      window.location.pathname === "/wallet"
                        ? "active"
                        : "no-active"
                    }
                  >
                    {t("wallet")}
                  </span>
                </Link>
              </li>
              <li className={navbarButton.join(" ")} onClick={toggleExpand}>
                <Link to="/platform">
                  <span
                    className={
                      window.location.pathname === "/platform"
                        ? "active"
                        : "no-active"
                    }
                  >
                    {t("platform")}
                  </span>
                </Link>
              </li>
              <li className={navbarButton.join(" ")} onClick={toggleExpand}>
                <Link to="debit-card">
                  <span
                    className={
                      window.location.pathname === "/debit-card"
                        ? "active"
                        : "no-active"
                    }
                  >
                    {t("debitcard")}
                  </span>
                </Link>
              </li>
              <li className={navbarButton.join(" ")} onClick={toggleExpand}>
                <Link to="/information">
                  <span
                    className={
                      window.location.pathname === "/information"
                        ? "active"
                        : "no-active"
                    }
                  >
                    {t("information")}
                  </span>
                </Link>
              </li>
              <li className="lang-switcher-destop">
                <LanguageSwitcher />
              </li>
            </ul>
          <div className="hamb-socials">
            <div className="container-social-media">
              <a className="fa fa-facebook round" />
              <a className="fa fa-twitter round" />
              <a className="fa fa-telegram round"></a>
            </div>
          </div>
          {isOpen && (
            <div className="nav-overlay" onClick={() => setOpen(false)} />
          )}
        </div>
      </nav>
    </section>
  );
};
