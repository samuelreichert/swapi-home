import styled from 'styled-components';
import { withPageLayout } from '../components/withPageLayout';

const AboutLink = styled.a`
  color: ${props => props.theme.colors.grayLight};
`;

const AboutText = styled.p`
  color: ${props => props.theme.colors.white};
  line-height: 1.5;
  max-width: 800px;
`;

const AboutTitle = styled.h2`
  color: ${props => props.theme.colors.white};
`;

const About = () => {
  return (
    <>
      <AboutTitle>About the application</AboutTitle>
      <AboutText>
        The application was built with React, written in Typescript. To perform requests, react-query was used. To style the react components, I chose styled-components.<br /> And to build the pages I used react-router-dom. With all the 3 pages having a lot in common I created a HOC hook to apply the header, footer and some styles to the pages.
      </AboutText>

      <AboutTitle>About me</AboutTitle>
      <AboutText>
        Hi, my name is Samuel. I am 26 years old, a Front-end developer, Brazilian, I love coffee, I love building stuff with javascript, and React is a framework that powers me to build apps quickly. My hobbies are read books, watch series, and play video game.
      </AboutText>

      <AboutTitle>GitHub Repository</AboutTitle>
      <AboutLink href='https://github.com/samuelreichert/swapi-home'>
        github.com/samuelreichert/swapi-home
      </AboutLink>
    </>
  );
};

export default withPageLayout(About);
