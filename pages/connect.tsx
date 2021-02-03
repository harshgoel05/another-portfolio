import { getPersonalDetails } from '@utils/apiService';
import { PersonalDetailsContext } from '@utils/contexts';
import { PersonalDetails } from '@utils/types';
import { Footer, Loader, Navbar } from '@shared-components';
import dynamic from 'next/dynamic';

type Props = {
  personalDetails: PersonalDetails;
};

const ConnectPage = dynamic(() => import('../components/connect/index'), {
  ssr: false,
  loading: () => <Loader />
});

const Contact = ({ personalDetails }: Props): JSX.Element => {
  return (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <Navbar />
        <ConnectPage />
        <Footer />
      </PersonalDetailsContext.Provider>
    </>
  );
};

export default Contact;

export async function getStaticProps(): Promise<{ props: { personalDetails: PersonalDetails } }> {
  const personalDetails = (await getPersonalDetails()) as PersonalDetails;
  return { props: { personalDetails } };
}
