import { getPersonalDetails } from '@utils/apiService';
import { PersonalDetailsContext } from '@utils/contexts';
import { PersonalDetails } from '@utils/types';
import { Footer, Loader, Navbar } from '@shared-components';
import dynamic from 'next/dynamic';
import Head from 'next/head';

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
      <Head>
        <title>Harsh Goel | Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
