import * as React from 'react';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';
import { ScreenReadersOnly } from '@components/ScreenReaderOnly';
import { SocialLinks } from '@components/SocialLinks';
import { Copyright } from '@components/Copyright';
import { CustomLink } from './Link';

type Open = {
  open: boolean;
};

const links = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '/blog',
  } /*
  {
    id: 'talks',
    label: 'Talks',
    href: '/talks',
  },*/,
];

const StyledHeaderContainer = tw.header`
  w-full shadow-md pt-4 px-4 sm:px-8 justify-center flex flex-row
`;

const StyledHeader = tw.header`
  max-w-5xl flex flex-row justify-between w-full
`;

// todo this
const StyledLogoContainer = tw.div`
  p-2
`;

const StyledLogo = tw.a`
  text-xl text-primary text-blue-600 
`;
const StyledLink = styled.a`
  font-weight: 350;
  cursor: pointer;
  &.selected {
    color: var(--tertiary);
    font-weight: 700;
  }
  &:hover {
    color: var(--tertiary);
  }
`;

const StyledUL = tw.ul`
  flex flex-row justify-between hidden md:flex
`;

const StyledULMobile = tw.ul`
  flex flex-col justify-between md:flex text-tertiary
`;

const StyledLIMobile = tw.li`
  text-3xl p-8 hover:underline block w-min text-white
`;
const StyledLI = tw.li`
  p-2
`;

const MenuIcon = tw.div`
  text-primary md:hidden absolute top-5 right-4 z-20 p-2
`;

const StyledBarUp = styled.span`
  transition: transform 250ms;
  ${() => tw`w-8 h-1 bg-primary m-1 block`}
  ${({ open }: Open) => `transform: ${open ? 'rotate(45deg)' : 'none'}`}
`;
const StyledBarDown = styled.span`
  transition: transform 250ms;
  ${() => tw`w-8 h-1 bg-primary m-1 block`}
  ${({ open }: Open) =>
    `transform: ${open ? 'rotate(-45deg) translate(5px, -6px)' : 'none'}`}
`;

const StyledMobileNav = styled.div`
  animation: myBackgroundColor 500ms;
  @keyframes toSecondary {
    from {
      background-color: var(--background);
    }
    to {
      background-color: var(--secondary);
    }
  }
  @keyframes toBackground {
    from {
      background-color: var(--secondary);
    }
    to {
      background-color: var(--background);
    }
  }
  ${() =>
    tw`bg-secondary w-full h-full absolute inset-0 md:hidden flex-col justify-between z-10`}
  ${({ open }: Open) => `
    animation: ${open ? 'toSecondary' : 'toBackground'} 500ms;
    display: ${open ? 'flex' : 'none'}
  `}
`;

const StyledMobileNavFooter = tw.div`
  flex flex-row justify-between text-tertiary p-4
`;

const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <StyledHeaderContainer>
      <StyledHeader>
        <StyledLogoContainer>
          <Link href="/">
            <StyledLogo>Aymen Ben Amor</StyledLogo>
          </Link>
        </StyledLogoContainer>
        <nav>
          <StyledUL>
            {links.map(item => (
              <StyledLI key={item.id}>
                <CustomLink href={item.href}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <StyledLink>{item.label}</StyledLink>
                </CustomLink>
              </StyledLI>
            ))}
            <StyledLI>
              <StyledLink href="mailto:director@b2asolutions.com">
                Contact
              </StyledLink>
            </StyledLI>
          </StyledUL>
          <MenuIcon onClick={() => setOpen(previousValue => !previousValue)}>
            <ScreenReadersOnly>Open Navigation</ScreenReadersOnly>
            <StyledBarUp open={open} />
            <StyledBarDown open={open} />
          </MenuIcon>
          <StyledMobileNav open={open}>
            <StyledULMobile>
              {links.map(item => (
                <StyledLIMobile key={item.id}>
                  <CustomLink href={item.href}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <StyledLink>{item.label}</StyledLink>
                  </CustomLink>
                </StyledLIMobile>
              ))}
              <StyledLIMobile>
                <StyledLink href="mailto:director@b2asolutions.com">
                  Contact
                </StyledLink>
              </StyledLIMobile>
            </StyledULMobile>
            <StyledMobileNavFooter>
              <Copyright withBreak />
              <SocialLinks />
            </StyledMobileNavFooter>
          </StyledMobileNav>
        </nav>
      </StyledHeader>
    </StyledHeaderContainer>
  );
};

export default Header;
