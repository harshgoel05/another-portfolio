import { useContext } from 'react';
import { InlineWidget } from 'react-calendly';
import { PersonalDetailsContext } from 'shared/utils/contexts';
import { PersonalDetails } from 'shared/utils/types';

export default function Connect(): JSX.Element {
  const { calendyUrl, socialMedia }: PersonalDetails = useContext(PersonalDetailsContext);
  return (
    <>
      <div className="bg-blue pt-28 h-auto min-h-screen">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full text-center lg:w-7/12 lg:text-left pl-0 lg:pl-20">
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl sm:text-2xl xl:text-1xl font-extrabold text-white leading-none mb-6">
                Meet and Greet
              </h1>
              <p className="text-sm sm:text-7xl font-light text-white leading-none mb-6">
                Schedule a 30 minutes call with me via Google meet.
              </p>
              <div className="flex flex-row justify-center lg:justify-start items-end">
                {socialMedia.map(({ alt_text, image_file, link }) => {
                  return (
                    <a href={link} key={link}>
                      <img
                        src={image_file}
                        alt={alt_text}
                        className="w-6 md:w-10 h-10 m-2 md:m-2 transition-all hover:opacity-40 transform hover:scale-75"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="ml-auto w-full px-10 lg:px-20 lg:w-5/12 h-auto">
            <InlineWidget
              styles={{ height: '600px', width: '100%', margin: 'auto' }}
              pageSettings={{ textColor: '#B8C1EC', primaryColor: '#B8C1EC' }}
              url={calendyUrl}
            />
          </div>
        </div>
      </div>
    </>
  );
}
