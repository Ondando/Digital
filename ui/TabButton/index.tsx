import { AiOutlineMenu } from 'react-icons/ai';

interface IIconButton {
  evt: any;
  size: number;
}

export default function TabButton({ size, evt }: IIconButton) {
  return (
    <div onClick={evt}>
      <AiOutlineMenu size={size} />
    </div>
  );
}
