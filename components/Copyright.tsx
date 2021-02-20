import tw from 'twin.macro';

const StyledCopyright = tw.div`
  text-xs flex flex-col justify-end
`;

export const Copyright = ({ withBreak }: { withBreak?: boolean }) => (
  <StyledCopyright>
    © 2021-present Aymen Bem Amor. {withBreak ? <br /> : ''} All Rights
    Reserved.
  </StyledCopyright>
);
