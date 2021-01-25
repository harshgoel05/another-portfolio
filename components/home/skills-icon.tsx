export default function SkillsIcons(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Add Logos of Technologies */}
      <div className="flex items-center justify-center">
        <img
          src="/images/skills/mongodb.svg"
          alt="MongoDB"
          className="p-2 sm:p-6 w-16 sm:w-36 md:w-24 lg:w-36"
        />
        <img
          src="/images/skills/node.svg"
          alt="NodeJS"
          className="p-2 sm:p-6 w-16 sm:w-36 md:w-24 lg:w-36"
        />
        <img
          src="/images/skills/react.svg"
          alt="ReactJS"
          className="p-2 sm:p-6 w-16 sm:w-36 md:w-24 lg:w-36"
        />
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/images/skills/js.svg"
          alt="Javascript"
          className="p-2 sm:p-6 w-16 sm:w-36 md:w-24 lg:w-36"
        />
        <img
          src="/images/skills/ts.svg"
          alt="Typescript"
          className="p-2 sm:p-6 w-16 sm:w-36 md:w-24 lg:w-36"
        />
        <img
          src="/images/skills/react-native.svg"
          alt="React Native"
          className="p-2 sm:p-6 w-16 sm:w-36 md:w-24 lg:w-36"
        />
        <img
          src="/images/skills/angular.svg"
          alt="AngularJS"
          className="p-2 sm:p-6 w-16 sm:w-36 md:w-24 lg:w-36"
        />
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/images/skills/express.svg"
          alt="ExpressJS"
          className="p-2 sm:p-6 w-16 sm:w-36 md:w-24 lg:w-36"
        />
        <img
          src="/images/skills/figma.svg"
          alt="Figma"
          className="p-2 sm:p-6 w-16 sm:w-36 md:w-24 lg:w-36"
        />
        <img
          src="/images/skills/git.svg"
          alt="Git"
          className="p-2 sm:p-6 w-16 sm:w-36 md:w-24 lg:w-36"
        />
      </div>
    </div>
  );
}
