import Head from 'next/head';
import Layout from '@components/Layout';
import { posts } from '../../getAllPosts';
import { PostsContainer } from '@components/PostsContainer';

const title = 'Digital garden of Aymen Ben Amor';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostsContainer posts={posts} title="Blog" />
    </Layout>
  );
};

export default Home;
