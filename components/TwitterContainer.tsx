import tw, { styled } from 'twin.macro';
import * as React from 'react';

const StyledTwitter = styled.div`
  && {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    position: sticky;
  }
  ${() => tw`sticky px-4`}
`;

const TwitterContainer = () => (
  <StyledTwitter>
    <a
      href="https://twitter.com/Aymen_Ben_Amor?ref_src=twsrc%5Etfw"
      className="twitter-follow-button"
      data-show-count="false"
    >
      Follow @Aymen_Ben_Amor
    </a>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charSet="utf-8"
    ></script>
  </StyledTwitter>
);

export default TwitterContainer;
