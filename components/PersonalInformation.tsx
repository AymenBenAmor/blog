import tw, { styled } from 'twin.macro';
import Image from 'next/image';

const StyledPersonalInfo = styled.div`
  width: 100%;
  margin: 5rem auto;
  max-width: 1500px;
  && {
    grid-column: 1 / -1;
  }
  ${() => tw`mt-16 flex flex-col md:flex-row`}
`;

const StyledPresentation = tw.div`
  sm:px-20 flex-row md:w-8/12
`;

const StyledImageContainer = tw.div`
  flex flex-row justify-center md:w-1/2
`;

const StyledContent = tw.div`
text-justify
`;

export const PersonalInformation = () => {
  return (
    <StyledPersonalInfo>
      <StyledPresentation>
        <StyledContent>
          <h3>Hi there,</h3>
          <p>
            Welcome to my digital garden. My name is Aymen and I am a web
            developer Based in Brussels but I am kinda universal hihi...
          </p>
          <p>
            My mother is originally from Belarus but she used to live in Russia
            so we have Russian citizenship. My father is from Tunisia and I was
            born in Koweit.
          </p>
          <p>
            I have been living in Brussels for around 7 years now where I work
            as a freelance Front-end developer.
          </p>
          <p>
            I am also a JS geek (Love javascript) and am an active member of the
            community. I am the founder of{' '}
            <a href="https://www.bejs.io/">BeJS</a>: A JavaScript community in
            Belgium and I manage a weekly newsletter about JavaScript. I also
            contribute to open source projects such as lion. By the way, I am a
            huge react fan and enthusiast.
          </p>
        </StyledContent>
        <div>Add newsletter form here in a box</div>
      </StyledPresentation>
      <StyledImageContainer>
        <Image
          src="/aymen-simpson-transparent.png"
          alt="Simpsons style picture of Aymen"
          width={462}
          height={653}
        />
      </StyledImageContainer>
    </StyledPersonalInfo>
  );
};
