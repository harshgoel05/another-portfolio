import { HeaderSmall } from '@shared-components';
import SkillsIcons from './skills-icon';

export default function Skills(): JSX.Element {
  return (
    <>
      <img
        src="/images/vectors/ellipse.svg"
        alt="Ellipse Vector"
        className="absolute right-0 bottom-0 w-2/3 md:w-50p lg:w-35p pointer-events-none"
      />
      <img
        src="/images/vectors/triangle.svg"
        alt="Triangle 3d Vector"
        className="block md:hidden absolute right-1/3 top-16 w-1/4 md:w-16 animate-spin pointer-events-none"
      />
      <div className="grid grid-cols-12 gap-4 lg:h-90vh place-items-center items-center">
        <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
          {/* Hero Header */}
          <div className="items-center w-3/4 relative">
            <HeaderSmall text="What does he do?" />
            <h1 className="w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-5xl font-normal tracking-wide text-white leading-normal">
              He builds beautiful, logical web & mobile app solutions. Designs in his hobby time.
            </h1>
            <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
              Think. <span className="text-pink">Code.</span> Debug.
            </h1>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-col justify-center items-center my-10 sm:mt-0">
          <SkillsIcons />
        </div>
      </div>
    </>
  );
}
