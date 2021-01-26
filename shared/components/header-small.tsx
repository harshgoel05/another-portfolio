interface Props {
  text: string;
}
export default function HeaderSmall({ text }: Props): JSX.Element {
  return (
    <>
      <div className="flex items-center">
        <hr className="w-16 sm:w-24 mr-1 border-violet" />
        <h4 className="font-light gradient-text text-sm md:text-7xl">{text}</h4>
      </div>
    </>
  );
}
