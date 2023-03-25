export const Text = ({ text }: { text: string }) => {
  return <p className="text-base">{text}</p>;
};

export const LargeText = ({ text }: { text: string }) => {
  return <p className="text-5xl">{text}</p>;
};
