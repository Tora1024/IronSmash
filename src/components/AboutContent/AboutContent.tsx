import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">About IronSmash</h1>
      <p className="mb-4">
        IronSmash is simple but efficient tool that helps players that wants to
        challenge a buddy in a Smash Bros Ultimate Ironman versus.
      </p>
      <p className="mb-4">
        This very same need arose in our casual plays, and we wanted an app that
        could gather, scramble and list all the characters for this versus
        challenge and then record each match, to have a final winner.
      </p>
      <h2 className="text-2xl font-bold mb-4">Key Features</h2>
      <ul className="list-disc mb-4 ml-4">
        <li>Easy start, just generate and the app takes care of the rest.</li>
        <li>
          All recorded fights will be shown in a final result with the winner.
        </li>
        <li>
          More modes coming, including a solo mode, and tournament mode as well.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Benefits</h2>
      <ul className="list-disc mb-4 ml-4">
        <li>
          Saves time by not having to use another tool not specialized for this
          challenge.
        </li>
        <li>
          Keeps track of each fight in case an argument about a certain match
          arise.
        </li>
        <li>Simple and easy.</li>
      </ul>

      <Link
        href="/about"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default AboutPage;
