import type { NextApiRequest, NextApiResponse } from 'next';
import characterData, { Character } from '../../../data/charactersData';
import nc from 'next-connect';

const getCharacter = (id: string | string[] | undefined = '1') =>
  characterData.find((character) => Number(character.id) === Number(id));

const handler = nc().get(
  (req: NextApiRequest, res: NextApiResponse<Character>) => {
    const id: string | string[] | undefined = req.query.id;
    const character: Character | undefined = getCharacter(id);

    if (!character) {
      res.status(404);
      res.end();
      return;
    }

    res.status(200).json(character);
  }
);

export default handler;
