import Head from 'next/head';
import tw from 'twin.macro';
import Layout from '@components/Layout';
import Header from '@components/Header';

const Container = tw.div``;

const title = 'Aymen blog test';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container>some content</Container>
      </main>

      <footer></footer>
    </Layout>
  );
};

export default Home;
