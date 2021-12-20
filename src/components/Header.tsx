import styled from 'styled-components';
import Navigation from './Navigation';
import logo from '../logo.png';

const HeaderComponent = styled.header`
  align-items: center;
  background-color: ${props => props.theme.colors.grayDark};
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

const Header = () => {
  return (
    <HeaderComponent>
      <img src={logo} alt='Star Wars logo' height={100} />

      <Navigation />
    </HeaderComponent>
  );
};

export default Header;
