import tw, { styled } from 'twin.macro';
import Header from '@components/Header';
import { Footer } from '@components/Footer';

type Props = {
  children: React.ReactNode;
};

const Main = styled.main`
  grid-template-columns: 1fr min(100%, 65ch) 1fr;
  min-height: 75vh;
  ${() => tw`grid`}
`;

const MainContainer = tw.div`
  grid gap-y-8 py-8 px-8
`;

const StyledPageContainer = styled.main`
  grid-template-rows: 70px 1fr 100px;
  ${() => tw`grid`}
`;

const Layout = ({ children }: Props) => {
  return (
    <StyledPageContainer>
      <Header />
      <Main>
        <span />
        <MainContainer>{children}</MainContainer>
        <span />
      </Main>
      <Footer />
    </StyledPageContainer>
  );
};

export default Layout;
