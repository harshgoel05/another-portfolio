import { Button, HeaderSmall } from '@shared-components';

export default function Landing(): JSX.Element {
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
      <div className="grid grid-cols-12 gap-4 h-84.5vh">
        <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col justify-center items-center">
          {/* Hero Header */}
          <div className="items-center w-3/4 -mt-10 relative">
            <img
              src="/images/vectors/triangle.svg"
              alt="Triangle 3d Vector"
              className="hidden md:block absolute right-0 top-0 w-2/3 md:w-16 animate-spin duration-2000"
            />
            <HeaderSmall text="Who is he?" />
            <h1 className="text-3xl sm:text-2xl xl:text-1xl font-extrabold text-white leading-none mb-3">
              Harsh Goel
            </h1>
            <h5 className="text-7xl font-light text-violet text-justify">
              He is a third year undergraduate. A fresher with experience, this line describles him
              perfectly. And he is a full stack developer, but he can create beautiful apps as well.
              His perfect balance of technical & managarial skills makes him apart from the crowd.
            </h5>
            <div className="grid sm:grid-cols-2 md:grid-cols-none xl:grid-cols-2 gap-4 mt-6">
              <div className="sm:col-span-1 xl:col-span-1">
                <Button type="solid" text="Know More" />
              </div>
              <div className="sm:col-span-1 xl:col-span-1">
                <Button type="outlined" text="Download Resume" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:col-span-4 lg:col-span-6 text-justify text-white justify-end items-end ">
          <img
            src="/images/picture.svg"
            alt="Harsh Goel Profile Img"
            className="md:w-80 lg:w-1/2 pointer-events-none"
          />
        </div>
      </div>
    </>
  );
}
