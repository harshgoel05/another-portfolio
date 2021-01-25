export default function Footer(): JSX.Element {
  return (
    <>
      <div className="w-full mx-auto py-4 text-white h-auto bg-blue  flex justify-center items-center">
        <hr className="w-1/5 sm:w-1/4 lg:w-96 border-violet" />
        <p className="mx-3 md:mx-6 text-7xl font-light">
          Made
          <span role="img" aria-label="emoji" className="mx-3 animate-pulse">
            ❤️
          </span>
          with by Harsh Goel
        </p>
        <hr className="w-1/5 sm:w-1/4 lg:w-96 border-violet" />
      </div>
    </>
  );
}
