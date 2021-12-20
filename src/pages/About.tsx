import styled from 'styled-components';
import { withPageLayout } from '../components/withPageLayout';

const HomeText = styled.p`
  line-height: 1.5;
  max-width: 800px;
`;

const About = () => {
  return (
    <>
      <h2>About the application</h2>
      <HomeText>
        The application was built with React, written in Typescript. To perform requests, react-query was used. To style the react components, I chose styled-components.<br /> And to build the pages I used react-router-dom. With all the 3 pages having a lot in common I created a HOC hook to apply the header, footer and some styles to the pages.
      </HomeText>

      <h2>About me</h2>
      <HomeText>
        Hi, my name is Samuel. I am 26 years old, a Front-end developer, Brazilian, I love coffee, I love building stuff with javascript, and React is a framework that powers me to build apps quickly. My hobbies are read books, watch series, and play video game.
      </HomeText>

      <h2>GitHub Repository</h2>
      <span>github.com/samuelreichert/swapi-home</span>
    </>
  );
};

export default withPageLayout(About);
