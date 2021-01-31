import Landing from './landing';
import Skills from './skills';
import Work from './work';
import Projects from './projects';
import Contact from './contact';

const HomePage = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28">
        <div className="overflow-x-hidden">
          <Landing />
          <Skills />
          <Work />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default HomePage;
