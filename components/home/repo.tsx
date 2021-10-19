import { HeaderSmall } from '@shared-components';
import { useEffect, useState } from 'react';
import { getGithubDetails } from '@utils/apiService';
import Tilt from 'react-tilt';

export default function RepoDetails(): JSX.Element {
  const [repoData, setRepoData] = useState(undefined);
  useEffect(() => {
    getGithubDetails().then((result) => {
      setRepoData(result);
    });
  }, []);
  return (
    <>
      <div className="relative h-auto py-10 lg:py-10">
        <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            {/* Hero Header */}
            <div className="items-center w-3/4">
              <HeaderSmall text="Loved this website?" />
              <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-5xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                Loved this portfolio? Make this <span className="text-pink">yours</span> by forking.
                {/* Gender specific????? */}
              </h1>
              <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                Visit Github Repository
              </h1>
              <p className="italic text-purple-50 text-sm mt-8">
                *Credits to the owners for the vectors/icons used. These are picked from various
                sources from the internet. <br />
                *Feel free to fork and make this repo your own, but make sure to give credits to
                <a href="https://harshgoelme">the owner</a>
              </p>
            </div>
          </div>
          {repoData && (
            <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-col justify-center items-center my-10 sm:mt-0 px-8 lg:p-24">
              <a href={repoData.html_url}>
                <Tilt className="Tilt" options={{ max: 25 }}>
                  <div className="bg-violet p-10 rounded-3xl shadow-violet-5xl">
                    <p className="text-5xl mb-6 font-bold">{repoData.name}</p>
                    <p className="break-words">{repoData.description}</p>
                    <div className="flex justify-evenly items-center mt-10 mb-5">
                      <div className="flex justify-center items-center">
                        <img src="/images/icons/warning.svg" alt="warning" className="h-6" />
                        <p className="ml-2 text-6xl ">{repoData.open_issues}</p>
                      </div>
                      <div className="flex justify-center items-center">
                        <img src="/images/icons/star.svg" alt="star" className="h-6" />
                        <p className="ml-2 text-6xl ">{repoData.watchers}</p>
                      </div>
                      <div className="flex justify-center items-center">
                        <img src="/images/icons/fork.svg" alt="fork" className="h-6" />
                        <p className="ml-2 text-6xl ">{repoData.forks}</p>
                      </div>
                    </div>
                    <p>
                      Last Updated :
                      <span className="italic font-light">
                        {' '}
                        {new Date(repoData.updated_at).toDateString()}
                      </span>
                    </p>
                  </div>
                </Tilt>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
