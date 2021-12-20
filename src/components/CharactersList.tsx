import styled from 'styled-components';
import Character from './Character';
import { CharactersListProps } from '../config/types';

const CharactersContainer = styled.div`
  background-color: ${props => props.theme.colors.grayDark};
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  margin: 32px 0;
  padding: 8px 24px 16px;
  width: 800px;
`;

const Title = styled.h2`
  text-align: center;
`;

const CharactersList = ({ characters }: CharactersListProps) => {
  const slicedCharacters = characters.slice(0, 5);

  return (
    <CharactersContainer>
      <Title>Characters searched...</Title>
      {slicedCharacters.map((character, i) => <Character {...character} key={i} />)}
    </CharactersContainer>
  );
};

export default CharactersList;
