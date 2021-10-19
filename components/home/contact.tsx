import { Button, HeaderSmall } from '@shared-components';
import { useRouter } from 'next/router';

export default function Contact(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <div className="relative h-auto py-10 lg:py-10">
        <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            {/* Hero Header */}
            <div className="items-center w-3/4 relative">
              <HeaderSmall text="Meet and Greet!" />
              <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-5xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                Impressed Already? <span className="text-pink">Schedule</span> a call with him.
                {/* Gender specific????? */}
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
        <div className="flex justify-center items-center w-full z-30">
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
