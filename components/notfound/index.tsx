import { Button } from '@shared-components';
import { useRouter } from 'next/router';

export default function NotFoundPage(): JSX.Element {
  const router = useRouter();
  return (
    <div className="bg-blue">
      <div className="container bg-blue w-screen h-screen overflow-hidden">
        <img
          src="/images/vectors/404-hero.svg"
          alt="404 hero"
          className="absolute left-0 bottom-0 w-3/4 sm:w-3/4 md:w-1/2 pointer-events-none"
        />
        <img
          src="/images/vectors/404-polygon.svg"
          alt="404 vector"
          className="absolute right-0 top-0 w-1/2 sm:w-1/3 pointer-events-none"
        />
        <div className="fixed right-8 sm:right-32 lg:right-96 top-40 md:top-56">
          <h3 className="text-7xl font-light text-white leading-loose pr-1 mb-2">
            Hey! You seem to be lost :(
          </h3>
          <h1 className="font-bold text-2xl md:text-1xl text-white leading-none">
            404. <br /> Not Found.
          </h1>
          <div className="mt-6">
            <Button type="solid" text="Back to Home" onClickHandler={() => router.push('/')} />
          </div>
        </div>
      </div>
    </div>
  );
}
