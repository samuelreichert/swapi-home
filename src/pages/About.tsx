import { withPageLayout } from '../components/withPageLayout';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

const tags = [
  'React 19',
  'TypeScript 5',
  'Vite 6',
  'React Router 7',
  'TanStack Query 5',
  'Olyx UI',
  'Base UI',
  'Vitest 2',
  'CSS Custom Properties',
  'use-debounce',
  'Vercel',
];

const About = () => (
  <div style={{ maxWidth: '680px', width: '100%' }}>
    <h2 style={{ color: 'var(--color-on-background)', marginBottom: 'var(--space-4)' }}>
      About the project
    </h2>
    <p
      style={{ color: 'var(--color-on-surface-variant)', lineHeight: 'var(--line-height-relaxed)' }}
    >
      SWAPI Home is a Star Wars character search app built as a frontend assignment. It lets you
      search characters by name using the{' '}
      <a href="https://swapi.info" style={{ color: 'var(--color-primary)' }}>
        swapi.info
      </a>{' '}
      REST API, returning up to 5 results per query. The interface is split into three pages — Home,
      Characters, and About — all sharing a common layout through a higher-order component.
    </p>

    <Separator style={{ margin: 'var(--space-8) 0' }} />

    <h2 style={{ color: 'var(--color-on-background)', marginBottom: 'var(--space-4)' }}>
      Technical decisions
    </h2>
    <p
      style={{ color: 'var(--color-on-surface-variant)', lineHeight: 'var(--line-height-relaxed)' }}
    >
      Vite replaces the default bundler for faster cold starts and native ESM. TanStack Query v5
      manages server state — the query is controlled by an <code>enabled</code> flag tied to a
      debounced input, removing the need for manual <code>refetch()</code> calls or side-effect
      orchestration. Olyx UI, built on Base UI primitives, handles components using native CSS
      custom properties and <code>@layer</code>, giving zero-runtime styling with no specificity
      conflicts. TypeScript strict mode is enforced throughout, including typed query key tuples via{' '}
      <code>QueryFunctionContext</code>. Tests run on Vitest with Testing Library in a jsdom
      environment. Deployment targets Vercel with a rewrite rule that routes all paths to{' '}
      <code>index.html</code> for client-side navigation.
    </p>

    <Separator style={{ margin: 'var(--space-8) 0' }} />

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
      {tags.map((tag) => (
        <Badge key={tag} mode="lighter" size="md">
          {tag}
        </Badge>
      ))}
    </div>
  </div>
);

export default withPageLayout(About);
