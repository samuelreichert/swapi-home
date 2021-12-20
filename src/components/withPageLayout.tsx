import { ComponentType } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

const ContentLayout = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.gray10};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 64px;

`;

export function withPageLayout<T>(WrappedComponent: ComponentType<T>) {
  return (props: T) => (
    <PageLayout>
      <Header />
      <ContentLayout>
        <WrappedComponent {...props} />
      </ContentLayout>
      <Footer />
    </PageLayout>
  );
};
