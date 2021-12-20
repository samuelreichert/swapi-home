import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationComponent = styled.nav`
  border-top: 1px solid ${props => props.theme.colors.grayMedium};
  margin-top: 24px;
  padding: 16px 8px;
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  font-size: 18px;
  line-height: 1;
  list-style: none;
  margin: 0;
  margin-right: 24px;
  padding: 0;
  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  text-transform: uppercase;
`;

const Navigation = () => {
  return (
    <NavigationComponent>
      <NavList>
        <NavItem>
          <NavLink to='/'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/characters'>Characters</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/about'>About</NavLink>
        </NavItem>
      </NavList>
    </NavigationComponent>
  );
};

export default Navigation;
