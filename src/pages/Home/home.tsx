import { CardWithBackground, Footer, Newslatter } from "components";
import {
  CardsSectionWithBg,
  MegatronSection,
  PartnersSection,
  PlatformSection,
  WalletSection,
} from "sections";
import megatronImage from "../../assets/images/home-image.svg";
import { PublicLayout } from "layouts/PublicLayout/PublicLayout";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default () => {
  const { t } = useTranslation("home");

  const HomeMegatronBottom = {
    type: "megatron_bottom",
    title: t("title"),
    description: t("description"),
    descriptionBold: t("descriptionBold"),
    descriptionBoldYellow: t("descriptionBoldYellow"),
    img: megatronImage,
  };

  return (
    <PublicLayout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <MegatronSection props={HomeMegatronBottom} />
      <PartnersSection />
      <WalletSection />
      <PlatformSection />
      <CardsSectionWithBg
        title={t("card-section-title")}
        description={t("card-section-description")}
      >
        <CardWithBackground />
      </CardsSectionWithBg>
      <Newslatter />
      <Footer />
    </PublicLayout>
  );
};
