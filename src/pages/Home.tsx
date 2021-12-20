import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withPageLayout } from '../components/withPageLayout';

const HomeLink = styled(Link)`
  color: ${props => props.theme.colors.gray5};
`;

const HomeText = styled.p`
  line-height: 1.5;
  max-width: 800px;
`;

const Home = () => (
  <>
    <h1>Welcome to Star Wars search app</h1>
    <HomeText>
      To use the search, go to the <HomeLink to='/characters'>characters</HomeLink> page, and type the name of the Star Wars character.<br />
      After finish typing the results of the character searched will show.<br />
      You will receive 5 characters per search. If the search does not return what you were looking for, just delete and type again.<br />
    </HomeText>
  </>
);

export default withPageLayout(Home);
