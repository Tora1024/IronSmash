import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SingleMatcher from '@/components/CharacterMatcher/CharacterMatcher';
import { Character } from '@/types/characterTypes';

interface HomeProps {
  characters: Array<Character>;
}

const Home: React.FC<HomeProps> = ({ characters }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SingleMatcher characters={characters} />
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch(`http://localhost:3000/api/characters`);

  if (!response.ok) {
    return { characters: [] };
  }

  const characters = (await response.json()) as Array<Character>;

  return {
    props: { characters },
  };
}
