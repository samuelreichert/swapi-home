import Navigation from './Navigation';
import logo from '../logo.png';

const Header = () => (
  <header
    style={{
      alignItems: 'center',
      background:
        'linear-gradient(180deg, var(--color-surface-container-high) 0%, var(--color-surface-container) 100%)',
      borderBottom: '1px solid var(--color-outline-variant)',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 'var(--space-8)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* accent glow behind logo */}
    <div
      style={{
        position: 'absolute',
        top: '-60px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '400px',
        height: '200px',
        background:
          'radial-gradient(ellipse at center, var(--color-primary-container) 0%, transparent 70%)',
        opacity: 0.4,
        pointerEvents: 'none',
      }}
    />
    <img src={logo} alt="Star Wars logo" height={90} style={{ position: 'relative', zIndex: 1 }} />
    <Navigation />
  </header>
);

export default Header;
