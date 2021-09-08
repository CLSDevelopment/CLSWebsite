import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "components/LanguageSwitcher/LanguageSwitcher";
import closeImg from "../../assets/images/close.svg";
import logoWhite from "../../assets/icon/logo-footer.png";

import "./NavBar.scss";

export const NavBar = () => {
  const { t } = useTranslation("home");
  const [expanded, setExpended] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const navbarContainer = ["container--custom--navbar"];

  const navbarClasses = ["navbar", "navbar-expand-xl"];

  const navbarCollapseClasses = [
    "collapse",
    "navbar-collapse",
    "navbar-collapse-custom",
    expanded && "show",
  ];

  const navbarButton = ["clearsight-menu-right"];

  const navbarBurgerMenu = ["hamburger-icon"];

  const toggleExpand = () => {
    const menuBarMobile = document.getElementById(
      "public-contianer"
    ) as HTMLInputElement;

    menuBarMobile.style.overflow = "hidden";

    if (window.innerWidth <= 1199) {
      if (!expanded) {
        setExpended(!expanded);

        return (document.body.style.overflowY = "hidden");
      }
      const inputTag = document.getElementById(
        "navbarSupportedContent"
      ) as HTMLInputElement;
      inputTag.style.overflowY = "hidden";

      document.body.style.overflowY = "scroll";

      setExpended(!expanded);
    }
    setExpended(false);
  };

  return (
    <section className={navbarContainer.join(" ")} id="container_scroll_y">
      <nav className={navbarClasses.join(" ")} id="scroll_y">
        <div className="mr-auto">
          <a href="/" className="navbar-brand clearsight-logo">
            <img src={logoWhite} className="logo-mobile" alt="clearsight" />
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

          <ul className="navbar-nav ml-auto">
            <li className={navbarButton.join(" ")} onClick={toggleExpand}>
              <Link to={"/"}>
                <span
                  className={
                    window.location.pathname === "/" ? "active" : "no-active"
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
          </ul>
          <LanguageSwitcher />
          {isOpen && (
            <div className="nav-overlay" onClick={() => setOpen(false)} />
          )}
        </div>
      </nav>
    </section>
  );
};
