import dynamic from 'next/dynamic';
import { Footer, Navbar } from '@shared-components';
import CustomCursor from 'shared/cursor';
import { getPersonalDetails, getCompanyDetails } from 'shared/utils/apiService';
import { PersonalDetails } from 'shared/utils/types';
import { Company } from 'shared/utils/constants';
import { CompanyDetailsContext, PersonalDetailsContext } from 'shared/utils/contexts';

const WorkPage = dynamic(() => import('../components/work/index'), {
  ssr: false
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
          <CustomCursor />
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
