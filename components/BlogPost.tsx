import * as React from 'react';
import { Article } from '@components/Article';
import Head from 'next/head';
import type { Meta } from './PostsContainer';
import { Heading } from '@components/Heading';
import ImageContainer from '@components/ImageContainer';

type BlogPostProps = {
  children: React.ReactNode;
  meta: Meta;
};

export const BlogPost = ({
  children,
  meta: { title, description, image, link },
}: BlogPostProps) => {
  return (
    <Article>
      <Head>
        <title>{title}</title>
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
      <Heading tag="h1">
        How I created my blog and which decisions did I take
      </Heading>

      <ImageContainer src={image} />
      {children}
    </Article>
  );
};
