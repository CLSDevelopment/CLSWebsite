import { CardWithBackground, Footer, Newslatter } from 'components';
import {
  CardsSectionWithBg,
  MegatronSection,
  PartnersSection,
  PlatformSection,
  WalletSection,
} from 'sections';
import megatronImage from '../../assets/images/home-image.svg';
import Head from 'next/head';
import { PublicLayout } from 'layouts/PublicLayout/PublicLayout';
import { useTranslation } from 'react-i18next';

export default () => {
  const {t} = useTranslation("home")

  const HomeMegatronBottom = {
    type: 'megatron_bottom',
    title: t("title"),
    description: t("description"),
    descriptionBold: t("descriptionBold"),
    descriptionBoldYellow: t("descriptionBoldYellow"),
    img: megatronImage,
  };

  return (
    <div className="forgot-password">
      <PublicLayout>
        <Head>
          <title>Home</title>
        </Head>
        <MegatronSection props={HomeMegatronBottom} />
        <PartnersSection />
        <WalletSection />
        <PlatformSection />
        <CardsSectionWithBg title={t('card-section-title')} description={t('card-section-description')}>
          <CardWithBackground />
        </CardsSectionWithBg>
        <Newslatter />
        <Footer />
      </PublicLayout>
    </div>
  );
};
