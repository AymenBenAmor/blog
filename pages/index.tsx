import Head from 'next/head';
import Layout from '@components/Layout';
import { posts } from '../getAllPosts';
import { PersonalInformation } from '@components/PersonalInformation';
import { PostsContainer } from '@components/PostsContainer';
import * as React from 'react';

const title = "Aymen Ben Amor's blog";
const description =
  'Articles about Coding, JavaScript, Involvement in the community, Organizing community events, and Travelling';
const link = 'https://www.aymenbenamor.com';
const image = '/aymen-simpson.jpeg';

const Home = () => {
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
      <PostsContainer posts={posts} title="Recently published articles" />
      <PersonalInformation />
    </Layout>
  );
};

export default Home;
