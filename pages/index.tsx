import Head from 'next/head';
import tw, { styled } from 'twin.macro';
import Layout from '@components/Layout';

const Container = tw.div``;

const title = 'Aymen blog test';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>some content</Container>
      <Container>some content 2</Container>
      <Container>some content 3</Container>
      <Container>some content 4</Container>
      <Container>some content 5</Container>
    </Layout>
  );
};

export default Home;
