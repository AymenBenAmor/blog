import * as React from 'react';
import tw from 'twin.macro';

const StyledSpan = tw.span`
  text-secondary font-mono
`;

type Props = React.HTMLProps<HTMLSpanElement>;

export const FunkyWord = ({ ...props }: Props) => <StyledSpan {...props} />;
