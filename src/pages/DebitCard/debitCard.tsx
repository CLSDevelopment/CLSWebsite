import megatrgonPhoto from "../../assets/images/debit-card-megatron.svg";
import iconAtm from "../../assets/icon/atm.svg";
import { DebitCardCryptocurrencies, MegatronSection } from "sections";
import { Footer, GetStarted, Newslatter } from "components";
import { PublicLayout } from "layouts/PublicLayout/PublicLayout";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default () => {
  const { t } = useTranslation("debitCard");

  const DebitCardMegatronColmn = {
    type: "megatron_column",
    title: t("debit-card-title"),
    description: "Clearsight ",
    descriptionOptional: t("debit-card-descriptionOptional"),
    img: megatrgonPhoto,
    textArea: t("debit-card-textArea"),
    buttonArea: {
      buttonOrange: t("debit-card-btn"),
    },
  };

  const firstCard = [
    {
      title: t("gs-card-title-one"),
      description: t("gs-card-description-one"),
    },
  ];
  const secondCard = [
    {
      title: t("gs-card-title-two"),
      description: t("gs-card-description-two"),
    },
  ];
  const thirdCard = [
    {
      title: t("gs-card-title-third"),
      description: t("gs-card-description-third"),
    },
  ];

  return (
    <PublicLayout>
      <Helmet>
        <title>Debit Card</title>
      </Helmet>
      <MegatronSection props={DebitCardMegatronColmn} />
      <DebitCardCryptocurrencies />
      <GetStarted
        firstCard={firstCard}
        secondCard={secondCard}
        thirdCard={thirdCard}
        icon={iconAtm}
        id={"debit-card"}
      />
      <Newslatter />
      <Footer />
    </PublicLayout>
  );
};
