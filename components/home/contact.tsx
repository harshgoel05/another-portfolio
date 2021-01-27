import { Button, HeaderSmall } from '@shared-components';
import { useRouter } from 'next/router';

export default function Contact(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <div className="relative h-auto py-10 lg:py-20">
        {/* <img
          src="/images/vectors/cylinder.svg"
          alt="Cylinder Vector"
          className="absolute right-0 top-16 sm:top-7 md:top-28 lg:top-7 w-2/3 md:w-50p lg:w-35p pointer-events-none opacity-50 transition-all animate-absoluteright"
        />
        <img
          src="/images/vectors/l-vector.svg"
          alt="L Vector"
          className="absolute left-0 md:left-35p bottom-0 block md:hidden lg:block w-75p opacity-50 md:opacity-100 sm:w-1/3 md:w-1/4 lg:w-1/3 pointer-events-none"
        /> */}
        <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            {/* Hero Header */}
            <div className="items-center w-3/4 relative">
              <HeaderSmall text="Meet and Greet!" />
              <h1 className="w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-5xl font-normal tracking-wide text-white leading-normal">
                Impressed Already? <span className="text-pink">Schedule</span> a call with him.
              </h1>
              <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                Let’s grab a cup of coffee.
              </h1>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-col justify-center items-center my-10 sm:mt-0">
            <img src="/images/vectors/contact.svg" alt="" className="w-3/4" />
          </div>
        </div>
        <div className="flex justify-center items-center w-full z-40">
          <Button
            type="solid"
            text="Let's Connect! 🚀 "
            onClickHandler={() => router.push('/connect')}
          />
        </div>
      </div>
    </>
  );
}
