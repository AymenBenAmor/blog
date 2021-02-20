import tw from 'twin.macro';
import Link from 'next/link';
import { ScreenReadersOnly } from '@components/ScreenReaderOnly';
import { SocialLinks } from '@components/SocialLinks';

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
  pt-4 px-8 flex flex-row justify-between w-full max-w-5xl shadow-md
`;

// todo this
const StyledLogoContainer = tw.div`
  p-2
`;

// todo this
const StyledH1 = tw.div`
  text-xl text-primary
`;

const StyledUL = tw.ul`
  flex flex-row justify-between hidden md:flex
`;

const StyledULMobile = tw.ul`
  flex flex-col justify-between md:flex text-tertiary
`;

const StyledLIMobile = tw.li`
  text-3xl p-8 hover:underline block w-min
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
const StyledMobileNav = tw.div`
  bg-secondary w-full h-full absolute inset-0 md:hidden justify-between flex flex-col
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoContainer>
        <StyledH1>Aymen Ben Amor</StyledH1>
      </StyledLogoContainer>
      <nav>
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
        <StyledMobileNav>
          <StyledULMobile>
            {links.map(item => (
              <StyledLIMobile key={item.id}>
                <Link href={item.href}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a>{item.label}</a>
                </Link>
              </StyledLIMobile>
            ))}
          </StyledULMobile>
          <SocialLinks />
        </StyledMobileNav>
      </nav>
    </StyledHeader>
  );
};

export default Header;
