interface Props {
  text: string;
  onClickHandler: () => void;
}
export default function Button({ text, onClickHandler }: Props): JSX.Element {
  return (
    <>
      <button
        type="button"
        onClick={onClickHandler}
        className="bg-pink text-blue font-semibold
                    p-6 py-4 w-64  text-7xl h-25 transition-all
                    rounded overflow-hidden border-2 border-transparent
                    hover:outline-none hover:bg-transparent hover:text-pink hover:border-pink
                    focus:outline-none focus:bg-transparent focus:text-pink focus:border-pink">
        {text}
      </button>
    </>
  );
}
