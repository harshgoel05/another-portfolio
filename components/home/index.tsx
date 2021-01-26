import Landing from './landing';
import Skills from './skills';
import Work from './work';
import Projects from './projects';

// ml-4 sm:mx-12 md:mx-16

const HomePage = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28">
        <div className="overflow-x-hidden">
          <Landing />
          <Skills />
          <Work />
          <Projects />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default HomePage;
