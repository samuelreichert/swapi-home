import { useState } from 'react';
import { Character as CharacterType } from '../config/types';

const Character = ({
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  mass,
  name,
}: CharacterType) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-3) var(--space-4)',
        backgroundColor: hovered ? 'var(--color-surface-container-high)' : 'transparent',
        transition: 'background-color var(--transition-standard-fast-effects)',
        cursor: 'default',
      }}
    >
      <h3 style={{ color: 'var(--color-on-surface)', marginBottom: 'var(--space-1)' }}>
        {name}{' '}
        <span
          style={{
            fontWeight: 400,
            fontSize: 'var(--text-sm)',
            color: 'var(--color-on-surface-variant)',
          }}
        >
          {gender !== 'n/a' ? `· ${gender}` : ''}
        </span>
      </h3>
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-6)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-on-surface-variant)',
        }}
      >
        <span>Born {birth_year}</span>
        <span>
          {mass}kg · {height}cm
        </span>
        <span>
          {eye_color} eyes · {hair_color} hair
        </span>
      </div>
    </div>
  );
};

export default Character;
