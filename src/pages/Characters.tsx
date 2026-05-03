import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';
import { fetchAllCharacters } from '../api/searchCharacters';
import CharactersList from '../components/CharactersList';
import { withPageLayout } from '../components/withPageLayout';
import { Input } from '../components/ui/input';

const Characters = () => {
  const [charName, setCharName] = useState('');
  const [debouncedSearch] = useDebounce(charName, 750);

  const { data, isError, isPending } = useQuery({
    queryKey: ['characters'],
    queryFn: fetchAllCharacters,
    staleTime: Infinity,
  });

  const results = data
    ? data.filter((c) => c.name.toLowerCase().includes(debouncedSearch.toLowerCase())).slice(0, 5)
    : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <h2 style={{ color: 'var(--color-on-background)', marginBottom: 'var(--space-6)' }}>
        Character Search
      </h2>

      <Input
        type="text"
        placeholder="Search for characters..."
        onChange={(e) => setCharName(e.currentTarget.value)}
        style={{
          fontSize: 'var(--text-lg)',
          width: '480px',
          maxWidth: '100%',
        }}
      />

      {isPending && (
        <p
          style={{
            color: 'var(--color-on-surface-variant)',
            marginTop: 'var(--space-8)',
            fontSize: 'var(--text-base)',
          }}
        >
          Loading characters...
        </p>
      )}

      {isError && (
        <p
          style={{
            color: 'var(--color-error)',
            marginTop: 'var(--space-8)',
            fontSize: 'var(--text-base)',
          }}
        >
          Failed to load characters.
        </p>
      )}

      {!charName.length && !isPending && (
        <p
          style={{
            color: 'var(--color-on-surface-variant)',
            marginTop: 'var(--space-8)',
            fontSize: 'var(--text-base)',
          }}
        >
          Start typing to search across 82 characters...
        </p>
      )}

      {charName.length > 0 && !isPending && results.length === 0 && (
        <p
          style={{
            color: 'var(--color-on-surface-variant)',
            marginTop: 'var(--space-8)',
            fontSize: 'var(--text-base)',
          }}
        >
          No characters found for "{charName}".
        </p>
      )}

      {charName.length > 0 && results.length > 0 && <CharactersList characters={results} />}
    </div>
  );
};

export default withPageLayout(Characters);
