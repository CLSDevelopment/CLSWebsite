import React from "react";
import { Jumbotron, ListItem } from "../../components";
import debitCardImage from "../../assets/images/debit-card-section.png";

import "./DebitCardCryptocurrencies.scss";
import { useTranslation } from "react-i18next";

export const DebitCardCryptocurrencies = () => {

  const {t} = useTranslation("debitCard")

  const listItem = [
    { title: t("debit-card-title-one") },
    { title: t("debit-card-title-second")},
    { title: t("debit-card-title-third")},
    { title: t("debit-card-title-fourth")},
  ];
  return (
    <div className="debit-card-cryptocurrencies">
      <Jumbotron img={debitCardImage}>
        <h3 className="section-title">Clearsight</h3>
        <h1 className="section-description">
        {t("debit-card-crypto-description")}
        </h1>

        <ListItem data={listItem} />
        <a href="#" className="section-btn"><button className="section-button">{t("debit-card-crypto-btn")}</button></a>
      </Jumbotron>
    </div>
  );
};
