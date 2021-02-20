import * as React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';

const StyledUL = tw.ul`
  flex flex-row justify-center
`;
const StyledLi = tw.li`
  p-2
`;
const StyledDiv = tw.div`
  px-2 flex flex-col justify-end
`;

type SocialLink = {
  href: string;
  label: string;
  icon: string;
};

const socialLinks: SocialLink[] = [
  {
    href: 'LinkedIn',
    label: 'LinkedIn',
    icon: 'linkedin-icon',
  },
  {
    href: 'Twitter',
    label: 'Twitter',
    icon: 'twitter-icon',
  },
  {
    href: 'Github',
    label: 'Github',
    icon: 'github-icon',
  },
];

type Icon = {
  label: string;
  icon: string;
};

const displayIcon = ({ label, icon }: Icon) => (
  <Image alt={label} src={`/${icon}.svg`} height={20} width={20} />
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
