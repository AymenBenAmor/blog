import Head from 'next/head';
import tw from 'twin.macro';
import { Article } from '@components/Article';

const Title = tw.h1`
  text-pink-500
`;
const Container = tw.div``;

const title = 'Aymen blog test';

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
