import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withPageLayout } from '../components/withPageLayout';

const HomeLink = styled(Link)`
  color: ${props => props.theme.colors.grayLight};
`;

const HomeText = styled.p`
  color: ${props => props.theme.colors.white};
  line-height: 1.5;
  max-width: 800px;
`;

const HomeTitle = styled.h2`
  color: ${props => props.theme.colors.white};
`;

const Home = () => (
  <>
    <HomeTitle>Welcome to Star Wars search app</HomeTitle>
    <HomeText>
      To use the search, go to the <HomeLink to='/characters'>characters</HomeLink> page, and type the name of the Star Wars character.<br />
      After finish typing the results of the character searched will show.<br />
      You will receive 5 characters per search. If the search does not return what you were looking for, just delete and type again.<br />
    </HomeText>
  </>
);

export default withPageLayout(Home);
