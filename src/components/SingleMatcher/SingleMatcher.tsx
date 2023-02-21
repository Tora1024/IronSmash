import { useState, useEffect } from 'react';

const SingleMatcher: React.FC = () => {
  const [numPlayers, setNumPlayers] = useState(1);
  const [hasClickedButton, setHasClickedButton] = useState(false);

  const handleButtonClick = () => {
    setHasClickedButton(true);
    // Add code here to generate or regenerate content based on the selected number of players
  };

  return (
    <main className="flex-1 p-4">
      <div className="mb-4">
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
      </div>
      <div className="mb-4">
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {hasClickedButton ? 'Regenerate' : 'Generate'}
        </button>
      </div>
      {/* Add the rest of your content here */}
    </main>
  );
};

export default SingleMatcher;
