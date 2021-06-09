import * as React from 'react';
import tw, { styled } from 'twin.macro';

const StyledNote = styled.p`
  && {
    color: white;
  }
  ${() => tw`bg-yellow-500 p-4 rounded-md`}
`;

type Props = React.HTMLProps<HTMLDivElement>;

export const Note = ({ ...props }: Props) => <StyledNote {...props} />;
