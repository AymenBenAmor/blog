import tw, { styled } from 'twin.macro';
import { PostSummary } from './BlogPostSummary';
import { Heading } from '@components/Heading';

export type Meta = {
  date: string;
  description: string;
  readTime: number;
  title: string;
  image: string;
  link: string;
  hidden: boolean;
};

export type Post = {
  link: string;
  module: {
    meta: Meta;
  };
};

type Props = { posts: Post[]; title: string };

const StyledPostsContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  && {
    grid-column: 1 / -1;
  }
  ${() => tw`sm:px-20 lg:mx-auto`}
`;
const StyledPostsList = tw.div`
flex-col flex md:flex-row
`;
export const PostsContainer = ({ posts, title }: Props) => (
  <StyledPostsContainer>
    <Heading tag="h1">{title}</Heading>
    <StyledPostsList>
      {posts
        .filter(p => !p.module.meta.hidden)
        .map(post => (
          <PostSummary key={post.link} post={post} />
        ))}
    </StyledPostsList>
  </StyledPostsContainer>
);
