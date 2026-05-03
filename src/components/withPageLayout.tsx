import { ComponentType } from 'react';
import Header from './Header';
import Footer from './Footer';

export function withPageLayout<T extends object>(WrappedComponent: ComponentType<T>) {
  return (props: T) => (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main
        style={{
          alignItems: 'center',
          backgroundColor: 'var(--color-background)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          padding: 'var(--space-12) var(--space-16)',
        }}
      >
        <WrappedComponent {...props} />
      </main>
      <Footer />
    </div>
  );
}
