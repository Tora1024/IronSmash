import Image from 'next/image';
// Types
import { VersusCurrentMatch } from '@/types/characterTypes';

interface VersusCardProps {
  currentMatch: VersusCurrentMatch;
}

const VersusCard: React.FC<VersusCardProps> = (props: VersusCardProps) => {
  const { currentMatch } = props;
  const currentVersusCardPosition =
    currentMatch.matchNumber === 0
      ? 65
      : 65 + (currentMatch.matchNumber * 112 + currentMatch.matchNumber * 16);
  return (
    <div
      className={`${
        currentMatch.matchNumber < 44 ? 'flex flex-col w-[300px]' : 'hidden'
      }`}
    >
      <div
        className="flex justify-center h-28 bg-black p-2 m-2 rounded-lg"
        style={{ marginTop: `${currentVersusCardPosition}px` }}
      >
        <Image
          className=""
          src="/electricity1.gif"
          alt="versus"
          width="100"
          height="64"
        />
        <Image className="" src="/vs.png" alt="versus" width="64" height="64" />
        <Image
          className=""
          src="/electricity1.gif"
          alt="versus"
          width="100"
          height="64"
        />
      </div>
    </div>
  );
};

export default VersusCard;
