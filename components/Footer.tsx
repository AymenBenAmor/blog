import tw, { styled } from 'twin.macro';
import { SocialLinks } from '@components/SocialLinks';
import { Copyright } from '@components/Copyright';

const StyledFooter = styled.footer`
  grid-template-columns: 1fr;
  ${() => tw`p-8 w-full grid bg-transparent shadow-top grid-flow-col`}
`;

export const Footer = () => (
  <StyledFooter>
    <Copyright />
    <SocialLinks />
  </StyledFooter>
);
