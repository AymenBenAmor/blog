import * as React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Layout from '@components/Layout';
import { Heading } from '@components/Heading';

const title = "Aymen Ben Amor's career";
const description =
  'The presentation of the Career of Aymen Ben Amor: A frontend Developer based in Brussels';
const link = 'https://www.aymenbenamor.com/about';
const image = '/aymen-simpson.jpeg';

const Container = styled.div``;

const About = () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <link rel="canonical" href={link} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={link} />
        <meta property="og:site_name" content="React Brussels" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image:src" content={image} />
        <meta name="twitter:site" content="@BrusselsReact" />
        <meta name="twitter:creator" content="@BrusselsReact" />
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
