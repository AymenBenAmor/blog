import tw from 'twin.macro';

const StyledHeading = tw.h1`
  py-4
`;

type Props = {
  children: React.ReactNode;
  tag?: string;
};

export const Heading = ({ children, tag = 'h1' }: Props) => (
  <StyledHeading as={tag}>{children}</StyledHeading>
);
