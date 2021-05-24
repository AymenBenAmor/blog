import tw, { styled } from 'twin.macro';
import Link from 'next/link';
import type { Post } from './PostsContainer';

const StyledBlogPostSummary = styled.article`
  &:hover {
    h3 {
      font-size: 25px;
      transition: font-size 1s;
    }
  }
  ${() => tw`p-4 pl-0`}
`;

const StyledReadMore = tw.div`
  text-secondary mt-4 flex w-full justify-end font-extrabold
`;

export const PostSummary = ({ post }: { post: Post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <StyledBlogPostSummary>
      <Link href={'/blog' + link}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <h3>{meta.title}</h3>
          <p>{meta.description}</p>
          <StyledReadMore>
            <span>Read more →</span>
          </StyledReadMore>
        </a>
      </Link>
    </StyledBlogPostSummary>
  );
};
