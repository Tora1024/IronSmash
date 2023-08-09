import { MutableRefObject, useState, useRef } from 'react';
// Types
import {
  Character,
  Mode,
  ResultType,
  VersusResults,
  WinnerSelected,
} from '@/types/characterTypes';

interface CharacterCardProps {
  characters: Array<Character>;
  handleCharacterClick: (id: string) => void;
  mode: Mode;
  winnerSelected: WinnerSelected;
  versusResults: VersusResults;
}

const CharacterCard: React.FC<CharacterCardProps> = (
  props: CharacterCardProps
) => {
  const {
    characters,
    handleCharacterClick,
    mode,
    versusResults,
    winnerSelected,
  } = props;

  const containerRef = useRef<HTMLInputElement | null>(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
  const [selectedRef, setSelectedRef] = useState();
  const shouldShowResults = (id: string, resultType: ResultType) => {
    return (
      versusResults.matchResults.filter((result) => {
        return resultType === ResultType.Winner
          ? result.winner === id
          : result.loser === id;
      }).length > 0
    );
  };

  const handleNextCharacterClick = () => {
    setSelectedItemIndex((prevIndex) => prevIndex + 1);
    setSelectedRef(
      containerRef.current.querySelector(
        `[data-index="${selectedItemIndex + 1}"]`
      )
    );
    selectedRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return mode === Mode.Versus ? (
    <section className="flex flex-col w-[400px]" ref={containerRef}>
      {characters.map((character, index) => (
        <button
          key={character.id}
          ref={index === selectedItemIndex ? selectedRef : null}
          className={`items-center h-28 bg-black p-2 m-2 rounded-lg grid grid-cols-1 justify-between ${
            winnerSelected.winner === character.id &&
            winnerSelected.shouldAnimate
              ? 'animate-vibrate'
              : ''
          } 
          ${
            winnerSelected.loser === character.id &&
            winnerSelected.shouldAnimate
              ? 'animate-shake'
              : ''
          }
          `}
          onClick={() => handleCharacterClick(character.id)}
        >
          <section>
            {shouldShowResults(character.id, ResultType.Winner) && (
              <div className="absolute z-10 w-[368px] h-[90px] text-[60px] font-bold bg-green-500 opacity-70">
                WIN
              </div>
            )}
            {shouldShowResults(character.id, ResultType.Loser) && (
              <div className="absolute z-10 w-[368px] h-[90px] text-[60px] font-bold bg-red-500 opacity-70">
                LOSE
              </div>
            )}
            <div className="flex flex-col items-start absolute w-48">
              <h3 className="text-white font-bold text-xl">{character.id}</h3>
              <h3 className="text-white text-left font-bold text-xl">
                {character.name}
              </h3>
            </div>
            <img
              className={`${character.id === '88' ? 'w-[210px]' : ''}`}
              src={character.image}
              alt={character.name}
            />
          </section>
        </button>
      ))}
    </section>
  ) : (
    <section className="grid grid-cols-3 gap-4">
      {characters.map((character) => (
        <div
          key={character.id}
          className="flex justify-between bg-black p-2 rounded-lg"
        >
          <div className="absolute w-52">
            <h3 className="text-white font-bold text-xl">{character.id}</h3>
            <h3 className="text-white font-bold text-xl">{character.name}</h3>
          </div>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </section>
  );
};

export default CharacterCard;
