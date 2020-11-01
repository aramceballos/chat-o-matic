import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        outline: none
    }

    html {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
