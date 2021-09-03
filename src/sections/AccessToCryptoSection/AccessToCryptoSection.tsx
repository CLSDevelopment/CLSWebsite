import { useTranslation } from "react-i18next";
import { Jumbotron, ListItem } from "../../components";

import "./AccessToCryptoSection.scss";

export const AccessToCryptoSection = () => {
  const { t } = useTranslation("wallet");

  const listItem = [
    { title: t("access-to-crypto-title-one") },
    { title: t("access-to-crypto-title-two") },
    { title: t("access-to-crypto-title-three") },
    { title: t("access-to-crypto-title-four") },
    { title: t("access-to-crypto-title-five") },
    { title: t("access-to-crypto-title-six") },
  ];

  return (
    <div className="access-to-crypto">
      <Jumbotron component={<ListItem data={listItem} />}>
        <h3 className="section-title">Clearsight</h3>
        <h1 className="section-description">
          {t("access-to-crypto-description")}
        </h1>
        <p className="section-text">{t("access-to-crypto-text")}</p>
      </Jumbotron>
    </div>
  );
};
