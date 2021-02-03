import dynamic from 'next/dynamic';
import { Footer, Loader, Navbar } from '@shared-components';
import { getPersonalDetails, getCompanyDetails } from '@utils/apiService';
import { Company, PersonalDetails } from '@utils/types';
import { CompanyDetailsContext, PersonalDetailsContext } from '@utils/contexts';

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
