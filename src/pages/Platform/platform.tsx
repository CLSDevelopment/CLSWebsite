import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import {
  CardsSection,
  FindWorkSection,
  MegatronSection,
  PlatformJob,
  PlatformSkill,
  TestimonialsSection,
} from "sections";
import { Cards, Footer, Newslatter } from "components";

import megatronPhoto from "../../assets/images/platform-megatron-img.svg";
import { PublicLayout } from "layouts/PublicLayout/PublicLayout";

export default () => {
  const { t } = useTranslation("platform");

  const PlatformMeagtronColmn = {
    type: "megatron_column",
    title: t("platform-title"),
    description: t("platform-description"),
    descriptionOptional: t("platform-description-optional"),
    img: megatronPhoto,
    textArea: t("platform-text-area"),
    buttonArea: {
      buttonWhite: t("platform-button-white"),
      buttonTransparent: t("platform-button-transparent"),
    },
  };
  return (
    <PublicLayout>
      <Helmet>
        <title>Platform</title>
      </Helmet>
      <MegatronSection props={PlatformMeagtronColmn} />
      <CardsSection
        title={"ClearSight"}
        description={t("card-section-description")}
        textArea={t("card-section-text-area")}
      >
        <Cards />
      </CardsSection>
      <PlatformSkill />
      <FindWorkSection />
      <TestimonialsSection />
      <PlatformJob />
      <Newslatter />
      <Footer />
    </PublicLayout>
  );
};
