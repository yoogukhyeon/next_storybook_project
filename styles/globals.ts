import reset from 'styled-reset'; // style-reset 패키지
import { createGlobalStyle } from 'styled-components';

// GlobalStyles 설정
const GlobalStyles = createGlobalStyle` 
    ${reset}

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Pretendard', sans-serif;
      font-size: inherit;
      font-weight: inherit;
      text-decoration: none;
      letter-spacing: 0;
      word-break: break-all;
      object-fit: contain;
      list-style: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

`;

export default GlobalStyles;
