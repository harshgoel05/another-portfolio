import { Connect } from '@components';
import { getPersonalDetails } from '@utils/apiService';
import { PersonalDetailsContext } from '@utils/contexts';
import { PersonalDetails } from '@utils/types';
import { Footer, Navbar } from '@shared-components';

type Props = {
  personalDetails: PersonalDetails;
};

const Contact = ({ personalDetails }: Props): JSX.Element => {
  return (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <Navbar />
        <Connect />
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
