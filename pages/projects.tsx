import dynamic from 'next/dynamic';
import { getPersonalDetails, getProjectDetails } from '@utils/apiService';
import { PersonalDetailsContext, ProjectDetailsContext } from '@utils/contexts';
import { PersonalDetails, Project } from '@utils/types';
import { Footer, Loader, Navbar, SocialBar } from '@shared-components';
import Head from 'next/head';

const ProjectsPage = dynamic(() => import('../components/projects/index'), {
  ssr: false,
  loading: () => <Loader />
});
type Props = {
  personalDetails: PersonalDetails;
  projectDetails: Project[];
};

const Projects = ({ personalDetails, projectDetails }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Harsh Goel | Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <ProjectDetailsContext.Provider value={projectDetails}>
          <Navbar />
          <ProjectsPage />
          <SocialBar />
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
