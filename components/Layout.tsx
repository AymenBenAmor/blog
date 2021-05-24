import tw, { styled } from 'twin.macro';
import Header from '@components/Header';
import { Footer } from '@components/Footer';

type Props = {
  children: React.ReactNode;
};

const Main = styled.main`
  grid-template-columns: 1fr min(100%, 65ch) 1fr;
  min-height: 75vh;
  && > * {
    grid-column: 2;
  }
  ${() => tw`grid my-8 px-8`}
`;

const StyledPageContainer = styled.main`
  grid-template-rows: 70px 1fr 100px;
  ${() => tw`grid font-sans`}
`;

const Layout = ({ children }: Props) => {
  return (
    <StyledPageContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </StyledPageContainer>
  );
};

export default Layout;
