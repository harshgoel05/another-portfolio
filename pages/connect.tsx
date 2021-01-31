import Connect from 'components/connect';
import CustomCursor from 'shared/cursor';
import { getPersonalDetails } from 'shared/utils/api';
import { PersonalDetailsContext } from 'shared/utils/contexts';
import { PersonalDetails } from 'shared/utils/types';
import { Footer, Navbar } from '../shared/components';

type Props = {
  personalDetails: PersonalDetails;
};

export default function Contact({ personalDetails }: Props): JSX.Element {
  return (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <Navbar />
        <Connect />
        <CustomCursor />
        <Footer />
      </PersonalDetailsContext.Provider>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: { personalDetails: PersonalDetails } }> {
  const personalDetails = await getPersonalDetails();
  return { props: { personalDetails } };
}
