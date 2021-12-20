import styled from 'styled-components';
import { Character as CharacterType } from '../config/types';

const CharacterDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CharacterItem = styled.div`
  border-radius: 4px;
  padding: 0 12px 18px;

  &:hover {
    background-color: ${props => props.theme.colors.grayMedium};
  }
`;

const Character = ({
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  mass,
  name,
}: CharacterType) => {
  return (
    <CharacterItem>
      <h3>{name} <small>(Gender: {gender})</small></h3>

      <CharacterDetails>
        <span>Birth year: {birth_year}</span>
        <span>Mass: {mass}kg | Height: {height}cm</span>
        <span>Eyes: {eye_color} | Hair: {hair_color}</span>
      </CharacterDetails>
    </CharacterItem>
  );
};

export default Character;
