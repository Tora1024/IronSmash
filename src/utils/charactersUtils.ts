import _ from 'lodash';
// Types
import { Character, Matched } from '@/types/characterTypes';

export const shuffleForVersus = (charactersforShuffling: Array<Character>) => {
  const numberOfCharacters = charactersforShuffling.length;
  const middleIndex = Math.ceil(numberOfCharacters / 2);
  const charactersCopy = _.cloneDeep(charactersforShuffling);
  const firstHalf = charactersCopy.splice(0, middleIndex);
  const secondHalf = charactersCopy.splice(-middleIndex);
  const shuffledFirstHalf: Array<Character> = shuffleCharacters(firstHalf);
  const shuffledSecondHalf: Array<Character> = shuffleCharacters(secondHalf);
  const randomizedMatches: Array<Matched> = pairMatches(
    shuffledFirstHalf,
    shuffledSecondHalf
  );

  return { shuffledFirstHalf, shuffledSecondHalf, randomizedMatches };
};

export const shuffleCharacters = (charactersGroup: Array<Character>) => {
  return charactersGroup.sort(() => Math.random() - 0.5);
};

export const pairMatches = (
  firstPairing: Array<Character>,
  secondPairing: Array<Character>
): Array<Matched> => {
  return firstPairing.map((character: Character, index: number) => {
    return {
      firstCharacter: character.id,
      secondCharacter: secondPairing[index].id,
    };
  });
};
