import * as React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Article } from '@components/Article';
import Head from 'next/head';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

const About = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Article>
      <Head>
        <title>Article</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>test</main>

      <footer></footer>
    </Article>
  );
};

export default About;
