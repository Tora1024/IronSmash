export interface Character {
  image: string;
  name: string;
  id: string;
}

export enum Mode {
  Single = 'Single',
  Versus = 'Versus',
}

export enum Column {
  First = 'First',
  Second = 'Second',
}

export enum ResultType {
  Winner = 'Winner',
  Loser = 'Loser',
}

export interface Matched {
  firstCharacter: string;
  secondCharacter: string;
}

export interface VersusState {
  firstHalfToRender: Array<Character>;
  secondHalfToRender: Array<Character>;
  matches: Array<Matched>;
}

export interface VersusResults {
  firstColumnWinners: number;
  secondColumnWinners: number;
  matchResults: Array<MatchResult>;
}

export interface MatchResult {
  matchNumber: number;
  winner: string;
  loser: string;
}

export interface VersusCurrentMatch {
  matchNumber: number;
  firstCharacter: string;
  secondCharacter: string;
}

export interface WinnerSelected {
  winner: string;
  loser: string;
  shouldAnimate: boolean;
}
