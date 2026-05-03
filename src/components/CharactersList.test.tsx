import { render, screen } from '@testing-library/react';
import CharactersList from './CharactersList';

const mockCharacters = [
  {
    name: 'Luke Skywalker',
    birth_year: '19BBY',
    eye_color: 'blue',
    gender: 'male',
    hair_color: 'blond',
    height: '172',
    mass: '77',
  },
];

describe('CharactersList', () => {
  it('renders character names', () => {
    render(<CharactersList characters={mockCharacters} />);
    expect(screen.getByText(/Luke Skywalker/)).toBeInTheDocument();
  });
});
