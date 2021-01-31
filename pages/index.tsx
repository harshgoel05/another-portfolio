import { Footer, Navbar, SocialBar } from '@shared-components';
import dynamic from 'next/dynamic';
import CustomCursor from 'shared/cursor';
import { getPersonalDetails, getProjectDetails } from 'shared/utils/apiService';
import { PersonalDetailsContext, ProjectDetailsContext } from 'shared/utils/contexts';
import { PersonalDetails, Project } from 'shared/utils/types';

const HomePage = dynamic(() => import('../components/home/index'), {
  ssr: false
});

type Props = {
  personalDetails: PersonalDetails;
  projectDetails: Project[];
};
const Home = ({ personalDetails, projectDetails }: Props): JSX.Element => {
  return (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <ProjectDetailsContext.Provider value={projectDetails}>
          <CustomCursor />
          <Navbar />
          <SocialBar />
          <HomePage />
          <Footer />
        </ProjectDetailsContext.Provider>
      </PersonalDetailsContext.Provider>
    </>
  );
};

export default Home;

export async function getStaticProps(): Promise<{
  props: { personalDetails: PersonalDetails; projectDetails: Project[] };
}> {
  const personalDetails = await getPersonalDetails();
  const projectDetails = await getProjectDetails();
  return { props: { personalDetails, projectDetails } };
}
