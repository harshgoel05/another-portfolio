import { SocialBar } from '@shared-components';
import Landing from './landing';

const ProjectsPage = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28">
        <div className="overflow-x-hidden">
          <Landing />
        </div>
      </div>
      <SocialBar />
    </>
  );
};

export default ProjectsPage;
