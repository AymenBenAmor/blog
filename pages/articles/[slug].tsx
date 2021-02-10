import * as React from 'react';
import {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPropsContext,
  GetStaticPaths,
} from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Article } from '@components/Article';
import type { Post } from './index';

const Title = styled.h1``;
const Container = styled.div``;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  const paths = posts.map(post => ({
    params: { slug: post.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const emptyPost: Post = {
    id: 0,
    title: '',
    body: '',
    userId: 0,
  };
  if (!params?.id) {
    return {
      props: {
        post: emptyPost,
      },
    };
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post: Post = await res.json();

  return {
    props: {
      post,
    },
  };
};

const BlogPost = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Article>
      <Head>
        <title>Article</title>
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

export default BlogPost;
