import * as React from 'react';
import { Article } from '@components/Article';
import Head from 'next/head';
import type { Meta } from './PostsContainer';

type BlogPostProps = {
  children: React.ReactNode;
  meta: Meta;
};

export const BlogPost = ({ children, meta }: BlogPostProps) => {
  return (
    <Article>
      <Head>
        <title>{meta.title}</title>
      </Head>
      {children}
    </Article>
  );
};
