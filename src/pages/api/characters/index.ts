import type { NextApiRequest, NextApiResponse } from 'next';
import characterData, { Character } from '../../../data/charactersData';
import nc from 'next-connect';

const handler = nc().get(
  (req: NextApiRequest, res: NextApiResponse<Array<Character>>) => {
    res.status(200).json(characterData);
  }
);

export default handler;
