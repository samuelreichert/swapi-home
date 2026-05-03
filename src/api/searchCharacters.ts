const API_URL = 'https://swapi.info/api/people/';

export const fetchAllCharacters = async (): Promise<Character[]> => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

export type Character = {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  name: string;
};
