import styled from 'styled-components';

const FooterComponent = styled.footer`
  background-color: ${props => props.theme.colors.gray8};
  border-top: 1px solid ${props => props.theme.colors.gray7};
  color: ${props => props.theme.colors.gray1};
  display: flex;
  justify-content: center;
  padding: 12px 0;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.gray5};
`;

const Footer = () => {
  return (
    <FooterComponent>
      Created by Samuel Reichert for
      &nbsp;<FooterLink href='https://www.i3d.net/'>i3D.net</FooterLink>
      &nbsp;- Frontend assignment
    </FooterComponent>
  );
};

export default Footer;
