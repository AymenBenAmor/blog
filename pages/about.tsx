import * as React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Article } from '@components/Article';

const Title = styled.h1``;
const Container = styled.div``;

const About = () => {
  return (
    <Article>
      <Head>
        <title>About Aymen Ben Amor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>Who am I?</Title>
        <Container>some content</Container>
      </main>

      <footer></footer>
    </Article>
  );
};

export default About;
