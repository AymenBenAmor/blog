import * as React from 'react';
import tw from 'twin.macro';

const StyledNote = tw.p`
  bg-yellow-500 p-4 rounded-md text-white
`;

type Props = React.HTMLProps<HTMLParagraphElement>;

export const Note = (props: Props) => <StyledNote {...props} />;
