import { Link } from 'react-router';
import { withPageLayout } from '../components/withPageLayout';

const Home = () => (
  <div style={{ maxWidth: '640px', width: '100%', textAlign: 'center' }}>
    <p
      style={{
        color: 'var(--color-primary)',
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: 'var(--space-4)',
      }}
    >
      Star Wars Character Search
    </p>

    <h2
      style={{
        color: 'var(--color-on-background)',
        fontSize: 'var(--text-3xl)',
        marginBottom: 'var(--space-6)',
        lineHeight: 1.2,
      }}
    >
      Find any character from the galaxy
    </h2>

    <p
      style={{
        color: 'var(--color-on-surface-variant)',
        lineHeight: 'var(--line-height-relaxed)',
        marginBottom: 'var(--space-8)',
        fontSize: 'var(--text-lg)',
      }}
    >
      Search across 82 Star Wars characters from the SWAPI database. Type a name and results appear
      instantly.
    </p>

    <Link
      to="/characters"
      style={{
        display: 'inline-block',
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-on-primary)',
        padding: 'var(--space-3) var(--space-8)',
        borderRadius: 'var(--radius-rounded)',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: 'var(--text-base)',
        letterSpacing: '0.02em',
        boxShadow: 'var(--shadow-2)',
        transition: 'opacity var(--transition-standard-fast-effects)',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      Search characters
    </Link>
  </div>
);

export default withPageLayout(Home);
