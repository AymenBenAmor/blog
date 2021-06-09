import * as React from 'react';
import tw from 'twin.macro';

const StyledLink = tw.a`
  text-tertiary font-medium hover:underline focus:underline
`;

type Props = React.HTMLProps<HTMLAnchorElement>;

export const BeautifulLink = ({ ...props }: Props) => <StyledLink {...props} />;
