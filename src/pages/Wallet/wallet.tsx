import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { PublicLayout } from "layouts/PublicLayout/PublicLayout";
import { Footer, GetStarted, Newslatter } from "components";
import {
  AccessToCryptoSection,
  BuyCryptoSection,
  ExchangeInstantlySection,
  MegatronSection,
} from "sections";

import megatronPhoto from "../../assets/images/wallet-megatron-img.svg";

export default () => {
  const { t } = useTranslation("wallet");

  const walletMeagtronColmn = {
    type: "megatron_column",
    title: t("title"),
    description: t("description"),
    descriptionOptional: t("descriptionOptional"),
    img: megatronPhoto,
  };

  const firstCard = [
    {
      title: t("gs-first-card-title"),
      description: t("gs-first-card-description"),
    },
  ];
  const secondCard = [
    {
      title: t("gs-second-card-title"),
      description: t("gs-second-card-description"),
    },
  ];
  const thirdCard = [
    {
      title: t("gs-third-card-title"),
      description: t("gs-third-card-description"),
    },
  ];

  return (
    <PublicLayout>
      <Helmet>
        <title>Wallet</title>
      </Helmet>
      <MegatronSection props={walletMeagtronColmn} />
      <AccessToCryptoSection />
      <BuyCryptoSection />
      <ExchangeInstantlySection />
      <GetStarted
        firstCard={firstCard}
        secondCard={secondCard}
        thirdCard={thirdCard}
      />
      <Newslatter />
      <Footer />
    </PublicLayout>
  );
};
