import Head from 'next/head';
import styled from '@emotion/styled';
import { Article } from '@components/Article';

const Title = styled.h1``;
const Container = styled.div``;

const title = 'Aymen blog';

export default function Home() {
  return (
    <Article>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>{title}</Title>
        <Container>some content</Container>
      </main>

      <footer></footer>
    </Article>
  );
}
