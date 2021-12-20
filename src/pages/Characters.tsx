import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import searchCharacters from '../api/searchCharacters';
import useDebounce from '../hooks/useDebounce';
import CharactersList from '../components/CharactersList';
import { withPageLayout } from '../components/withPageLayout';

const CharactersInput = styled.input`
  border-radius: 8px;
  font-size: 22px;
  min-width: 320px;
  padding: 6px 12px;
`;

const StatusText = styled.h2`
  color: ${props => props.theme.colors.white};
`;

const Characters = () => {
  const [charName, setCharName] = useState('');
  const debouncedSearch = useDebounce(charName);
  const { data, isError, isLoading, refetch } = useQuery(
    ['searchCharacters', { search: debouncedSearch }],
    searchCharacters,
    { enabled: false }
  );

  useEffect(() => {
    if (debouncedSearch) refetch();
  }, [debouncedSearch, refetch]);

  return (
    <>
      <CharactersInput
        type='text'
        placeholder='Search for characters...'
        onChange={(e) => setCharName(e.currentTarget.value)}
      />

      {isLoading && <StatusText>Loading...</StatusText>}

      {isError &&
        <StatusText>Error: <small>Characters not found...</small></StatusText>
      }

      {!charName.length &&
        <StatusText>Waiting for input...</StatusText>
      }

      {data && charName && <CharactersList characters={data.results} />}
    </>
  );
};

export default withPageLayout(Characters);
