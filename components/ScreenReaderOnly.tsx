import React from 'react';
import tw from 'twin.macro';

type Props = React.HTMLProps<HTMLSpanElement> & {
  children: React.ReactNode;
};

const HiddenSpan = tw.span`
  sr-only
`;

const ScreenReadersOnly = ({ children, ...delegated }: Props) => {
  const [forceShow, setForceShow] = React.useState(false);
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Alt') {
          setForceShow(true);
        }
      };
      const handleKeyUp = (ev: KeyboardEvent) => {
        if (ev.key === 'Alt') {
          setForceShow(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keydown', handleKeyUp);
      };
    }
  }, []);
  if (forceShow) {
    return children as React.ReactElement;
  }
  return <HiddenSpan {...delegated}>{children}</HiddenSpan>;
};

export default ScreenReadersOnly;
