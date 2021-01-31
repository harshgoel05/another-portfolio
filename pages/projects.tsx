import dynamic from 'next/dynamic';
import CustomCursor from 'shared/cursor';
import { getPersonalDetails, getProjectDetails } from 'shared/utils/api';
import { PersonalDetailsContext, ProjectDetailsContext } from 'shared/utils/contexts';
import { PersonalDetails, Project } from 'shared/utils/types';
import { Footer, Navbar, SocialBar } from '../shared/components';

const ProjectsPage = dynamic(() => import('../components/projects/index'), {
  ssr: false
});
type Props = {
  personalDetails: PersonalDetails;
  projectDetails: Project[];
};

const Projects = ({ personalDetails, projectDetails }: Props): JSX.Element => {
  return (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <ProjectDetailsContext.Provider value={projectDetails}>
          <Navbar />
          <ProjectsPage />
          <SocialBar />
          <CustomCursor />
          <Footer />
        </ProjectDetailsContext.Provider>
      </PersonalDetailsContext.Provider>
    </>
  );
};
export default Projects;
export async function getStaticProps(): Promise<{
  props: { personalDetails: PersonalDetails; projectDetails: Project[] };
}> {
  const personalDetails = (await getPersonalDetails()) as PersonalDetails;
  const projectDetails = (await getProjectDetails()) as Project[];
  return { props: { personalDetails, projectDetails } };
}
