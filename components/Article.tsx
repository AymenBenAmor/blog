import React from 'react';
import tw from 'twin.macro';
import Layout from '@components/Layout';

const StyledArticle = tw.article``;

export const Article = ({ children }: { children: React.ReactNode }) => (
  <Layout>
    <StyledArticle>{children}</StyledArticle>
  </Layout>
);
