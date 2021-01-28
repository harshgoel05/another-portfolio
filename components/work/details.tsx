/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { Companies } from '@constants';
import { useEffect, useState } from 'react';
import CompanyDetails from './company-details';

export default function Details(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  let numbering = 0;
  useEffect(() => {}, [activeIndex]);
  return (
    <>
      <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 place-items-center">
        <div className="col-span-12 sm:col-span-6 flex flex-col ">
          <div className="px-10 py-5">
            {Companies.map(
              (company, index): JSX.Element => {
                if (company.featured) {
                  numbering += 1;
                  return (
                    <div key={company.name}>
                      <h1 className="text-1xl font-black text-white -mb-10 z-auto">
                        {numbering >= 0 && numbering <= 9
                          ? `0${numbering - 1}`
                          : `${numbering - 1}`}
                      </h1>
                      <button
                        className={`${
                          activeIndex === index
                            ? 'bg-pink border-transparent'
                            : 'border-pink text-white'
                        } border-transparent border-2 rounded-xl 
                    px-10 py-4 text-center z-40 w-60 lg:w-96
                    transition-all hover:shadow-light-xl 
                    hover:outline-none active:outline-none focus:outline-none`}
                        onClick={() => {
                          setActiveIndex(index);
                        }}
                        type="button">
                        {company.name}
                      </button>
                    </div>
                  );
                }
              }
            )}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 flex flex-col justify-center items-center min-h-full">
          <CompanyDetails company1={Companies[activeIndex]} />
        </div>
      </div>
    </>
  );
}
