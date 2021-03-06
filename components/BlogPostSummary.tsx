import tw, { styled } from 'twin.macro';
import Link from 'next/link';
import type { Post } from './PostsContainer';

const StyledBlogPostSummary = styled.article`
  &:hover {
    div {
      visibility: visible;
      transition: visibility 0.5s ease-in;
    }
  }
  ${() => tw`p-4 md:mx-2 md:my-0 my-2 bg-gray-100 rounded-xl`}
`;

const StyledReadMore = tw.div`
  text-secondary mt-4 flex w-full justify-end font-extrabold invisible
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
