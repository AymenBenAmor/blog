/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  href: string;
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};

export const CustomLink = ({ href, children }: Props) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (
    (href === '/' && router.pathname === href) ||
    (href !== '/' && router.pathname.includes(href))
  ) {
    className = `${className} selected`;
  }
  return (
    <Link href={href}>{React.cloneElement(children, { className, href })}</Link>
  );
};
