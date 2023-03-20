import Image from 'next/image';
// Types
import { VersusResults } from '@/types/characterTypes';

interface ResultsProps {
  finalResult: VersusResults;
}

const Results: React.FC<ResultsProps> = (props: ResultsProps) => {
  const { finalResult } = props;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center text-4xl">
        <Image
          className=""
          src="/IronMan.png"
          alt="p1"
          width="300"
          height="64"
        />
        Results
      </div>
      <div className="flex justify-around w-96 mt-8">
        <div className="flex flex-col items-center text-4xl">
          <Image className="" src="/p1.jpeg" alt="p1" width="100" height="30" />
          {finalResult.firstColumnWinners}
        </div>
        <div className="flex flex-col items-center text-4xl">
          <Image className="" src="/p2.jpeg" alt="p2" width="100" height="30" />
          {finalResult.secondColumnWinners}
        </div>
      </div>
    </div>
  );
};

export default Results;
