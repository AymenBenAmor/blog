import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { Heading } from '@components/Heading';
import { BeautifulLink } from '@components/BeautifulLink';
import { Paragraph } from '@components/Paragraph';

const StyledPersonalInfo = styled.div`
  width: 100%;
  max-width: 1500px;
  && {
    grid-column: 1 / -1;
  }
  ${() => tw`flex flex-col md:flex-row lg:mx-auto`}
`;

const StyledPresentation = tw.div`
  sm:px-20 flex-row md:w-8/12
`;

const StyledImageContainer = styled.div`
  max-height: 653px;
  ${() => tw`flex flex-row justify-center lg:w-3/12`}
`;

const StyledContent = tw.div`
text-justify
`;

const StyledDiv = tw.div`
  my-4
`;

export const PersonalInformation = () => {
  return (
    <StyledPersonalInfo>
      <StyledPresentation>
        <StyledContent>
          <Heading tag="h2">Hi there,</Heading>
          <StyledDiv>
            <Paragraph>
              Welcome to my digital garden. My name is Aymen and I am a web
              developer Based in Brussels but I am kinda universal hihi...
            </Paragraph>
            <Paragraph>
              My mother is originally from Belarus but she used to live in
              Russia so we have Russian citizenship. My father is from Tunisia
              and I was born in Koweit.
            </Paragraph>
            <Paragraph>
              I have been living in Brussels for around 7 years now where I work
              as a freelance Front-end developer.
            </Paragraph>
            <Paragraph>
              I am also a JS geek (Love javascript) and am an active member of
              the community. I am the founder of{' '}
              <BeautifulLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.bejs.io/"
              >
                BeJS
              </BeautifulLink>
              : A JavaScript community in Belgium and I manage a weekly
              newsletter about JavaScript. I also contribute to open source
              projects such as lion. By the way, I am a huge React fan and
              enthusiast. <br />I also recently announced the First React
              conference in Brussels! So if you wanna join us for a day full of
              React hot topics and fun, get your ticket here:{' '}
              <BeautifulLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.react.brussels/"
              >
                React Brussels
              </BeautifulLink>
            </Paragraph>
            <Paragraph>
              I will use this domain to publish articles about the things I am
              passionate about. There will be articles about Coding, JavaScript,
              Involvement in the community, Organizing community events, and
              Travelling.
            </Paragraph>
          </StyledDiv>
        </StyledContent>
      </StyledPresentation>
      <StyledImageContainer>
        <Image
          layout="intrinsic"
          src="/aymen-simpson-transparent.jpg"
          alt="Simpsons style picture of Aymen"
          quality={100}
          width={200}
          height={683}
        />
      </StyledImageContainer>
    </StyledPersonalInfo>
  );
};
