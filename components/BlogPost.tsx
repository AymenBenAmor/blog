import * as React from 'react';
import { Article } from '@components/Article';

type BlogPostProps = {
  children: React.ReactNode;
};

export const BlogPost = ({ children }: BlogPostProps) => {
  return <Article>{children}</Article>;
};
