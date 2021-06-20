import tw, { styled } from 'twin.macro';
import Image from 'next/image';

const StyledImageContainer = styled.div`
  height: 550px;
  display: block;
  position: relative;
  ${() => tw`pt-4 pb-4 mb-8`};
`;

const ImageContainer = ({ src, ...props }: { src: string }) => (
  <StyledImageContainer>
    <Image
      src={src}
      layout="fill"
      quality={50}
      {...props}
      objectFit="contain"
    />
  </StyledImageContainer>
);

export default ImageContainer;
