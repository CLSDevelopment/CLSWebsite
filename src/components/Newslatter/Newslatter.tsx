import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";


import "./Newslatter.scss";

export const Newslatter = () => {
  const urlMail = 'https://finance.us6.list-manage.com/subscribe/post?u=98b41a295edb23c0f4a7609f9&amp;id=1a704a895e';
  const {t} = useTranslation("home")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);


  return (
    <div className="contianer-newslatter">
      <div className="newslatter-header">
        <h3 className="title">{t("newslater-title")}</h3>
        <h1 className="description">{t("newslater-description")}</h1>
        <p className="text">
        {t("newslater-text")}

        </p>
      </div>
      <div className="newslatter-body">
        <MailchimpSubscribe
          url={urlMail}
          render={({ subscribe, status, message }) => (
            <div>
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            </div>
          )}
        />
        

      </div>
    </div>
  );
};
