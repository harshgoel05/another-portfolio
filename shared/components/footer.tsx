export default function Footer(): JSX.Element {
  return (
    <>
      <div className="w-full mx-auto text-white h-14 bg-blue  flex justify-center items-center">
        <hr className="w-96 border-violet" />
        <p className="mx-6">
          Made
          <span role="img" aria-label="emoji" className="mx-3 animate-pulse">
            ❤️
          </span>
          with by Harsh Goel
        </p>
        <hr className="w-96 border-violet" />
      </div>
    </>
  );
}
