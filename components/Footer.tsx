import tw, { styled } from 'twin.macro';
import { SocialLinks } from '@components/SocialLinks';
import { Copyright } from '@components/Copyright';

/*
const StyledFooter = styled.div`
  max-width: 1500px;
  display: flex;
  justify-content: space-between;
  ${() => tw`p-8`}
`;
*/

/*const StyledFooterContainer = tw.footer`
  w-full shadow-top flex justify-center
`;*/

const StyledFooterContainer = tw.footer`
  w-full shadow-top pt-4 px-4 justify-center flex flex-row px-8
`;

const StyledFooter = styled.div`
  max-width: 1500px;
  ${() => tw`flex flex-row justify-between w-full md:px-20`}
`;

export const Footer = () => (
  <StyledFooterContainer>
    <StyledFooter>
      <Copyright />
      <SocialLinks />
    </StyledFooter>
  </StyledFooterContainer>
);
