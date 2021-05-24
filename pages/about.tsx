import * as React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Layout from '@components/Layout';
import { Heading } from '@components/Heading';

const Container = styled.div``;

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Aymen Ben Amor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Heading tag="h2">About me</Heading>
        <Container>
          I am still building this section so come back later to check it out :){' '}
        </Container>
      </div>
    </Layout>
  );
};

export default About;
