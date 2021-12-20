import { ComponentType } from 'react';

export type Character = {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  name: string;
};

export type CharactersListProps = {
  characters: Character[];
};

export type PageLayoutProps = ComponentType;
