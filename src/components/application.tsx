import { useState, useEffect } from 'react';

import { allCharactersEndpoint } from '../lib/endpoints';

import Table from './table';
import Search from './search';

const Application = () => {
  const [characters, setCharacters] = useState<StarWarsCharacter[]>([]);
  const [loading, setLoading] = useState(true);

  console.log('Rendering…');

  useEffect(() => {
    fetch(allCharactersEndpoint())
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response.characters);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="max-w-5xl mx-auto my-8">
      <Search />
      <Table characters={characters} loading={loading} />
    </main>
  );
};

export default Application;
