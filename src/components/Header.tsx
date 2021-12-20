import styled from 'styled-components';
import Navigation from './Navigation';
import logo from '../logo.png';

const HeaderComponent = styled.header`
  align-items: center;
  background-color: ${props => props.theme.colors.gray8};
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

const Header = () => {
  return (
    <HeaderComponent>
      <img src={logo} alt='Star Wars logo' width={240} />

      <Navigation />
    </HeaderComponent>
  );
};

export default Header;
