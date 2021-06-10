import tw, { styled } from 'twin.macro';

type Props = { withBreak?: boolean };

const StyledCopyright = styled.div`
  ${({ withBreak }: Props) =>
    withBreak
      ? tw`text-base flex flex-col justify-end text-white`
      : tw`
text-base flex flex-col justify-center w-3/6 text-sm`}
`;
export const Copyright = ({ withBreak }: Props) => (
  <StyledCopyright withBreak={withBreak}>
    © 2021-present Aymen Ben Amor. {withBreak ? <br /> : ''} All Rights
    Reserved.
  </StyledCopyright>
);
