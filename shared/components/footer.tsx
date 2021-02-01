import { useContext } from 'react';
import { PersonalDetailsContext } from '@utils/contexts';
import { PersonalDetails } from '@utils/types';

export default function Footer(): JSX.Element {
  const { name }: PersonalDetails = useContext(PersonalDetailsContext);

  return (
    <>
      <div className="w-full mx-auto py-4 text-white h-auto bg-blue flex justify-center items-center">
        <hr className="w-1/5 sm:w-1/4 lg:w-96 border-violet" />
        <p className="mx-3 md:mx-6 text-sm sm:text-7xl font-light">
          Made with
          <span role="img" aria-label="emoji" className="mx-2 animate-pulse">
            ❤️
          </span>
          by <span className="text-pink">{name}</span>
        </p>
        <hr className="w-1/5 sm:w-1/4 lg:w-96 border-violet" />
      </div>
    </>
  );
}
