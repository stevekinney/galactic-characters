const baseUrl = 'https://star-wars-character-search.glitch.me';

export const allCharactersEndpoint = () => `${baseUrl}/api/characters`;
export const searchEndpoint = (search: string) =>
  `${baseUrl}/api/search/${search}`;
