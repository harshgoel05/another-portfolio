export default function NotFoundPage(): JSX.Element {
  return (
    <div className="bg-blue">
      <div className="container bg-blue w-screen h-screen">
        <img
          src="/images/vectors/404-hero.svg"
          alt="404 hero"
          className="absolute left-0 bottom-0 w-full sm:w-3/4 md:w-1/2 pointer-events-none"
        />
        <img
          src="/images/vectors/404-polygon.svg"
          alt="404 vector"
          className="absolute right-0 top-0 w-1/2 md:w-1/3 pointer-events-none"
        />
        <div className="fixed right-16 sm:right-32 md:right-96 bottom-1/2">
          <h3 className="text-6xl font-light text-white leading-loose pr-1">
            Hey! You seem to be lost :(
          </h3>
          <h1 className="font-bold text-2xl md:text-1xl text-white leading-none">
            404. <br /> Not Found.
          </h1>
        </div>
      </div>
    </div>
  );
}
