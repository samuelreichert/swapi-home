import { useState } from 'react';
import styled from 'styled-components';
import { withPageLayout } from '../components/withPageLayout';

const CharactersInput = styled.input`
  border-radius: 8px;
  font-size: 22px;
  margin-top: 32px;
  min-width: 320px;
  padding: 6px 12px;
`;

const StatusText = styled.h2`
  color: ${props => props.theme.colors.gray1};
`;

const Characters = () => {
  const [charName, setCharName] = useState('');

  return (
    <>
      <CharactersInput
        type='text'
        placeholder='Search for characters...'
        onChange={(e) => setCharName(e.currentTarget.value)}
      />

      {charName.length
        ? <StatusText>Typing...</StatusText>
        : <StatusText>Waiting for input...</StatusText>
      }
    </>
  );
};

export default withPageLayout(Characters);
