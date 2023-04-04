export const Text = ({ text }: { text: string }) => {
  return <p className="text-base">{text}</p>;
};

export const BoldSemiLargeText = ({ text }: { text: string }) => {
  return <p className="text-2xl font-bold">{text}</p>;
};

export const LargeText = ({ text }: { text: string }) => {
  return <p className="text-5xl">{text}</p>;
};
export const PriceText = ({ text }: { text: string }) => {
  return <p className="text-4xl font-bold">{text} Kzs</p>;
};
