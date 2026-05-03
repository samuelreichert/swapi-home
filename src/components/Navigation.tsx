import { Link, useLocation } from 'react-router';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Characters', to: '/characters' },
  { label: 'About', to: '/about' },
] as const;

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav
      style={{
        borderTop: '1px solid var(--color-outline-variant)',
        marginTop: 'var(--space-6)',
        padding: 'var(--space-3) var(--space-2)',
        width: '100%',
      }}
    >
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--space-2)',
          listStyle: 'none',
        }}
      >
        {navItems.map(({ label, to }) => {
          const active = pathname === to;
          return (
            <li key={label}>
              <Link
                to={to}
                style={{
                  color: active ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  letterSpacing: '0.07em',
                  fontSize: 'var(--text-sm)',
                  padding: 'var(--space-2) var(--space-4)',
                  borderRadius: 'var(--radius-rounded)',
                  backgroundColor: active ? 'var(--color-primary-container)' : 'transparent',
                  transition:
                    'background-color var(--transition-standard-fast-effects), color var(--transition-standard-fast-effects)',
                  display: 'inline-block',
                }}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
