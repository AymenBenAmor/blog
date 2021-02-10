import tw from 'twin.macro';
import React from 'react';
import Link from 'next/link';
import ScreenReadersOnly from '@components/ScreenReaderOnly';

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
  },
  {
    id: 'talks',
    label: 'Talks',
    href: '/talks',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
  },
];

const StyledHeader = tw.header`
  pt-5 pb-1 flex flex-row justify-between w-full max-w-5xl
`;
const StyledHeaderContainer = tw.div`
  w-full justify-center flex bg-transparent shadow-md
`;

// todo this
const StyledLogoContainer = tw.div`
  p-2 pl-4
`;

// todo this
const StyledH1 = tw.div`
  text-xl text-primary
`;
const StyledNavContainer = tw.nav`
  
`;

const StyledUL = tw.ul`
  flex flex-row justify-between hidden md:flex
`;
const StyledLI = tw.li`
  p-2
`;

const MenuIcon = tw.div`
  text-primary md:hidden p-2 pr-4
`;
const StyledBarUp = tw.div`
  w-8 h-1 bg-primary m-1
`;
const StyledBarDown = tw.div`
  w-8 h-1 bg-primary m-1
`;

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeader>
        <StyledLogoContainer>
          <StyledH1>Aymen Ben Amor</StyledH1>
        </StyledLogoContainer>
        <StyledNavContainer>
          <StyledUL>
            {links.map(item => (
              <StyledLI key={item.id}>
                <Link href={item.href}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a>{item.label}</a>
                </Link>
              </StyledLI>
            ))}
          </StyledUL>
          <MenuIcon>
            <ScreenReadersOnly>Open Navigation</ScreenReadersOnly>
            <StyledBarUp />
            <StyledBarDown />
          </MenuIcon>
        </StyledNavContainer>
      </StyledHeader>
    </StyledHeaderContainer>
  );
};

export default Header;
