import { Footer, Newslatter } from 'components';
import { PublicLayout } from 'layouts/PublicLayout/PublicLayout';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { InfoContentSection, MegatronSection, QuestionSection } from 'sections';

export default () => {
  
  const {t} = useTranslation("information")
  
  const InformationMegatronProps = {
    type: 'megatron_bottom',
    title: 'Clearsight',
    description:t("information-description") ,
    descriptionBoldYellow:t("information-descriptionBoldYellow") ,
    className: 'megatron-full-width',
    height: '400px',
  };

  return (
    <PublicLayout>
      <MegatronSection props={InformationMegatronProps} />
      <InfoContentSection />
      <QuestionSection />
      <Newslatter />
      <Footer />
    </PublicLayout>
  );
};
