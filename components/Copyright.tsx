import tw, { styled } from 'twin.macro';

type Props = { withBreak?: boolean };

const StyledCopyright = styled.div`
  ${({ withBreak }: Props) =>
    withBreak
      ? tw`text-xs flex flex-col justify-end text-white`
      : tw`
text-xs flex flex-col justify-end`}
`;
export const Copyright = ({ withBreak }: Props) => (
  <StyledCopyright withBreak={withBreak}>
    © 2021-present Aymen Bem Amor. {withBreak ? <br /> : ''} All Rights
    Reserved.
  </StyledCopyright>
);
