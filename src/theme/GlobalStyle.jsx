import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  ::selection {
    background: ${({ theme }) => theme.colors.secondary.main.color};
    color: ${({ theme }) => theme.colors.primary.main.color}
  }
  ::-webkit-scrollbar {
    width: .5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary.main.color};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.primary.main.color};
  }
}

${normalize}

html,
body {
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.fontFamily};
}
`;

export default GlobalStyle;
