interface Props {
  heading: string;
  text: string;
  color: string;
}
export default function TextCards({ text, heading, color }: Props): JSX.Element {
  return (
    <>
      <div className={`bg-${color} w-64 h-auto rounded-lg p-6`}>
        <div className="underline mb-2 font-semibold text-6xl">{heading}</div>
        <div className="font-normal text-7xl">{text}</div>
      </div>
    </>
  );
}
