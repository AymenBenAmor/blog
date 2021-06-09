import * as React from 'react';
import tw from 'twin.macro';

const StyledP = tw.p`
  py-2
`;

type Props = React.HTMLProps<HTMLParagraphElement>;

export const Paragraph = ({ ...props }: Props) => <StyledP {...props} />;
