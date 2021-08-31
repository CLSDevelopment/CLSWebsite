import React from "react";
import { useTranslation } from "react-i18next";

import "./Newslatter.scss"

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

    const {t} = useTranslation("home")

  return (
    <>
      <div className="input-global">
        <input
          ref={(node) => (email = node)}
          type="email"
          placeholder={t("newslater-input")}
          className="input-newslatter"
        />
        <button className="btn-newslatter" onClick={submit}>
        {t("newslater-btn")}
        </button>
      </div>
      <div className="message-handling">
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
    </>
  );
};

export default CustomForm;
