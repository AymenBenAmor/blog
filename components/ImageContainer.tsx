import tw from 'twin.macro';
import Image from 'next/image';

const StyledImageContainer = tw.div`
  pt-4 pb-4
`;

const ImageContainer = ({ src, ...props }: { src: string }) => (
  <StyledImageContainer>
    <Image src={src} width={800} height={550} {...props} />
  </StyledImageContainer>
);

export default ImageContainer;
