import Image from 'next/image';
// Types
import { Column, VersusResults } from '@/types/characterTypes';

interface ResultsProps {
  finalResult: VersusResults;
}

const Results: React.FC<ResultsProps> = (props: ResultsProps) => {
  const { finalResult } = props;
  const winner: Column =
    finalResult.firstColumnWinners > finalResult.secondColumnWinners
      ? Column.First
      : Column.Second;
  return (
    <section className="flex flex-col">
      <section className="flex flex-col items-center text-4xl">
        <Image
          className=""
          src="/IronMan.png"
          alt="p1"
          width="300"
          height="64"
        />
        Results
      </section>
      <section className="flex justify-around w-96 mt-8">
        <div className="flex flex-col items-center text-4xl">
          <Image className="" src="/p1.jpeg" alt="p1" width="100" height="30" />
          {finalResult.firstColumnWinners}
          {winner === Column.First && (
            <Image
              className=""
              src="/winner.png"
              alt="p1"
              width="100"
              height="100"
            />
          )}
        </div>
        <div className="flex flex-col items-center text-4xl">
          <Image className="" src="/p2.jpeg" alt="p2" width="100" height="30" />
          {finalResult.secondColumnWinners}
          {winner === Column.Second && (
            <Image
              className=""
              src="/winner.png"
              alt="p1"
              width="100"
              height="100"
            />
          )}
          {}
        </div>
      </section>
    </section>
  );
};

export default Results;
