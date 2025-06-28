
import { createGlobalStyle, type DefaultTheme } from "styled-components"


export const GlobalStyle = createGlobalStyle < { theme?: DefaultTheme }>`
body, html{
background: #666;
color: #666;
margin: 0;
padding:0;
font-family: "Inter", sans-serif;


export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
    body, html {
        background: ${(props) => props.theme.appBackground};
        color: ${(props) => props.theme.appColor};
        font-family: "Inter", sans-serif;
        margin: 0;
        padding: 0;
    }
    h1, h2, p, ul, li {
        margin: 0;
        padding: 0;
    }

    
`