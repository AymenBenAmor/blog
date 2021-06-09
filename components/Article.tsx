import React from 'react';
import Layout from '@components/Layout';

export const Article = ({ children }: { children: React.ReactNode }) => (
  <Layout>{children}</Layout>
);
