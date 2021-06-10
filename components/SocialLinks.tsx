import * as React from 'react';
import tw from 'twin.macro';

const StyledUL = tw.ul`
  flex flex-row justify-center
`;
const StyledLi = tw.li`
  p-2
`;
const StyledDiv = tw.div`
  p-2 flex flex-col justify-center
`;

type SocialLink = {
  href: string;
  label: string;
  icon: string;
};

const socialLinks: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/aymen-ben-amor-30281244/',
    label: 'LinkedIn',
    icon: 'linkedin-icon',
  },
  {
    href: 'https://twitter.com/Aymen_Ben_Amor',
    label: 'Twitter',
    icon: 'twitter-icon',
  },
  {
    href: 'https://github.com/AymenBenAmor',
    label: 'Github',
    icon: 'github-icon',
  },
];

type Icon = {
  label: string;
  icon: string;
};

const displayIcon = ({ label, icon }: Icon) => (
  <img alt={label} src={`/${icon}.svg`} height={20} width={20} />
);

export const SocialLinks = () => (
  <StyledDiv>
    <StyledUL>
      {socialLinks.map(({ href, label, icon }) => (
        <StyledLi key={label}>
          <a href={href}>{displayIcon({ icon, label })}</a>
        </StyledLi>
      ))}
    </StyledUL>
  </StyledDiv>
);
