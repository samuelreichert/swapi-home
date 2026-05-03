import { ComponentType } from 'react';
export type { Character } from '../api/searchCharacters';

export type CharactersListProps = {
  characters: import('../api/searchCharacters').Character[];
};

export type PageLayoutProps = ComponentType;
