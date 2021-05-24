import Head from 'next/head';
import Layout from '@components/Layout';
import { posts } from '../getAllPosts';
import { PersonalInformation } from '@components/PersonalInformation';
import { PostsContainer } from '@components/PostsContainer';

const title = 'Aymen blog test';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostsContainer posts={posts} title="Recently Published" />
      <PersonalInformation />
    </Layout>
  );
};

export default Home;
