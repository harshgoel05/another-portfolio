import dynamic from 'next/dynamic';
import { Footer, Loader, Navbar } from '@shared-components';
import { getPersonalDetails, getCompanyDetails } from '@utils/apiService';
import { Company, PersonalDetails } from '@utils/types';
import { CompanyDetailsContext, PersonalDetailsContext } from '@utils/contexts';
import Head from 'next/head';

const WorkPage = dynamic(() => import('../components/work/index'), {
  ssr: false,
  loading: () => <Loader />
});

type Props = {
  personalDetails: PersonalDetails;
  companyDetails: Company[];
};

const Work = ({ personalDetails, companyDetails }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Harsh Goel | Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <CompanyDetailsContext.Provider value={companyDetails}>
          <Navbar />
          <WorkPage />
          <Footer />
        </CompanyDetailsContext.Provider>
      </PersonalDetailsContext.Provider>
    </>
  );
};

export default Work;

export async function getStaticProps(): Promise<{
  props: { personalDetails: PersonalDetails; companyDetails: Company[] };
}> {
  const personalDetails = (await getPersonalDetails()) as PersonalDetails;
  const companyDetails = (await getCompanyDetails()) as Company[];
  return { props: { personalDetails, companyDetails } };
}
