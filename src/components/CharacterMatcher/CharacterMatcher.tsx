import Image from 'next/image';
import { useState } from 'react';
// Types
import {
  Character,
  Matched,
  MatchResult,
  Mode,
  VersusCurrentMatch,
  VersusResults,
  VersusState,
  WinnerSelected,
} from '@/types/characterTypes';
// Components
import CharacterCard from '../CharacterCard/CharacterCard';
import VersusCard from '../VersusCard/VersusCard';
import Results from '../Results/Reults';
// Utils
import { shuffleCharacters, shuffleForVersus } from '@/utils/charactersUtils';

interface CharacterMatcherProps {
  characters: Array<Character>;
}

const CharacterMatcher: React.FC<CharacterMatcherProps> = ({ characters }) => {
  const { shuffledFirstHalf, shuffledSecondHalf, randomizedMatches } =
    shuffleForVersus(characters);
  /* This will be turned on again when single player mode is completed */
  // const [numPlayers, setNumPlayers] = useState(1);
  const [numRandomizations, setNumRandomizations] = useState(0);
  const [versusMatches, setVersusMatches] = useState<VersusState>({
    firstHalfToRender: shuffledFirstHalf,
    secondHalfToRender: shuffledSecondHalf,
    matches: randomizedMatches,
  });
  const [winnerSelected, setWinnerSelected] = useState<WinnerSelected>({
    winner: '0',
    loser: '0',
    shouldAnimate: false,
  });
  const [versusResults, setVersusResults] = useState<VersusResults>({
    firstColumnWinners: 0,
    secondColumnWinners: 0,
    matchResults: [],
  });
  const [versusCurrentMatch, setVersusCurrentMatch] =
    useState<VersusCurrentMatch>({
      matchNumber: 0,
      firstCharacter: '0',
      secondCharacter: '0',
    });

  const handleRegenerationClick = () => {
    setNumRandomizations(numRandomizations + 1);
    const { shuffledFirstHalf, shuffledSecondHalf, randomizedMatches } =
      shuffleForVersus(characters);
    setVersusMatches({
      firstHalfToRender: shuffledFirstHalf,
      secondHalfToRender: shuffledSecondHalf,
      matches: randomizedMatches,
    });
    setVersusCurrentMatch({
      matchNumber: 0,
      firstCharacter: shuffledFirstHalf[0].id,
      secondCharacter: shuffledSecondHalf[0].id,
    });
    setVersusResults({
      firstColumnWinners: 0,
      secondColumnWinners: 0,
      matchResults: [],
    });
  };

  const handleCharacterClick = (id: string): void => {
    if (
      id === versusCurrentMatch.firstCharacter ||
      id === versusCurrentMatch.secondCharacter
    ) {
      let winner: string;
      let loser: string;
      let firstColumnWinners = versusResults.firstColumnWinners;
      let secondColumnWinners = versusResults.secondColumnWinners;
      const selectedPair: Matched = versusMatches.matches.find((match) => {
        return match.firstCharacter === id || match.secondCharacter === id;
      }) as Matched;

      if (selectedPair.firstCharacter === id) {
        winner = selectedPair.firstCharacter;
        loser = selectedPair.secondCharacter;
        firstColumnWinners = firstColumnWinners + 1;
      } else {
        winner = selectedPair.secondCharacter;
        loser = selectedPair.firstCharacter;
        secondColumnWinners = secondColumnWinners + 1;
      }
      // Sacar esto a su propio metodo
      setWinnerSelected({ winner, loser, shouldAnimate: true });

      setTimeout(() => {
        setWinnerSelected({ winner, loser, shouldAnimate: false });
      }, 500);

      if (versusCurrentMatch.matchNumber < 43) {
        const nextMatch =
          versusMatches.matches[versusCurrentMatch.matchNumber + 1];
        const nextMatchFirstCharacter = nextMatch.firstCharacter;
        const nextMatchSecondCharacter = nextMatch.secondCharacter;
        setVersusCurrentMatch({
          matchNumber: versusCurrentMatch.matchNumber + 1,
          firstCharacter: nextMatchFirstCharacter,
          secondCharacter: nextMatchSecondCharacter,
        });
      } else if (versusCurrentMatch.matchNumber === 43) {
        setVersusCurrentMatch({
          matchNumber: versusCurrentMatch.matchNumber + 1,
          firstCharacter: '',
          secondCharacter: '',
        });
      }

      const matchResults: Array<MatchResult> = [
        ...versusResults.matchResults,
        { matchNumber: versusCurrentMatch.matchNumber, winner, loser },
      ];

      setVersusResults({
        firstColumnWinners,
        secondColumnWinners,
        matchResults,
      });
    }
  };

  const renderCharacters = (numPlayers: number) => {
    if (numPlayers === 1) {
      const charactersToRender = shuffleCharacters(characters);
      return (
        <CharacterCard
          characters={charactersToRender}
          handleCharacterClick={handleCharacterClick}
          mode={Mode.Single}
          winnerSelected={winnerSelected}
          versusResults={versusResults}
        />
      );
    } else {
      return (
        <section className="flex justify-between w-[1200px]">
          <div>
            <Image
              className=""
              src="/p1.jpeg"
              alt="p1"
              width="100"
              height="64"
            />
            <CharacterCard
              characters={versusMatches.firstHalfToRender}
              handleCharacterClick={handleCharacterClick}
              mode={Mode.Versus}
              winnerSelected={winnerSelected}
              versusResults={versusResults}
            />
          </div>
          <VersusCard currentMatch={versusCurrentMatch} />
          <div>
            <Image
              className=""
              src="/p2.jpeg"
              alt="p2"
              width="100"
              height="64"
            />
            <CharacterCard
              characters={versusMatches.secondHalfToRender}
              handleCharacterClick={handleCharacterClick}
              mode={Mode.Versus}
              winnerSelected={winnerSelected}
              versusResults={versusResults}
            />
          </div>
        </section>
      );
    }
  };

  return (
    <main className="flex-1 p-4">
      {/* Extend content for single play mode */}
      {/* <div className="mb-4">
        <label htmlFor="numPlayers" className="mr-2">
          Number of players:
        </label>
        <select
          id="numPlayers"
          value={numPlayers}
          onChange={(event) => setNumPlayers(parseInt(event.target.value))}
          className="border border-gray-400 rounded px-2 py-1 pr-8 w-auto"
        >
          <option value={1}>1 player</option>
          <option value={2}>2 players</option>
        </select>
      </div> */}
      <section className="flex flex-col items-center justify-center mb-4">
        {numRandomizations === 0 && (
          <div className="border-2 border-solid rounded border-slate-800 mb-4  p-2 w-96 text-justify">
            Instructions: By clicking ‘generate’, a list of characters will be
            randomly selected for a two player versus. Each player will have
            half of the Smash Ultimate roster, with one player having a random
            wildcard character. By clicking a character in each round, that
            immediately sets it as the winner of the match, and the next match
            begins. When all the matches have been played and recorded, the
            result of the Iron man Versus will show.
          </div>
        )}
        <button
          onClick={handleRegenerationClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {numRandomizations > 0 ? 'Regenerate' : 'Generate'}
        </button>
      </section>
      {numRandomizations === 0 ? (
        <></>
      ) : (
        <div className="flex justify-center">
          {renderCharacters(
            2 /* Defaults to 2, until single player mode is active */
          )}
        </div>
      )}
      {versusCurrentMatch.matchNumber === 44 ? (
        <div className="flex justify-center">
          <Results finalResult={versusResults} />
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default CharacterMatcher;
