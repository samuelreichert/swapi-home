import Character from './Character';
import { CharactersListProps } from '../config/types';

const CharactersList = ({ characters }: CharactersListProps) => {
  const slicedCharacters = characters.slice(0, 5);

  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface-container)',
        border: '1px solid var(--color-outline-variant)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-3)',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 'var(--space-6)',
        padding: 'var(--space-4)',
        width: '680px',
        maxWidth: '100%',
        gap: 'var(--space-1)',
      }}
    >
      <p
        style={{
          color: 'var(--color-on-surface-variant)',
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          padding: 'var(--space-2) var(--space-4)',
          marginBottom: 'var(--space-1)',
        }}
      >
        {slicedCharacters.length} result{slicedCharacters.length !== 1 ? 's' : ''}
      </p>
      {slicedCharacters.map((character, i) => (
        <Character {...character} key={i} />
      ))}
    </div>
  );
};

export default CharactersList;
