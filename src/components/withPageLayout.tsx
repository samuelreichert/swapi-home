import { ComponentType } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

const ContentLayout = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 199px - 43px - 64px);
  padding: 32px 64px;

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
