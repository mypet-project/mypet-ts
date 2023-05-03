import { createGlobalStyle } from "styled-components";

/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito&display=swap'); */
//comentarios dentro de template string ainda sao lidos normalmente (só ñ é executado) pelas verificações do stiled components, nisso dispara WARN (q serve para avisar para nao usar algo)

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button, input, textarea, select {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	font-family: Inter, system-ui, /* Avenir, */ Helvetica, Arial, sans-serif;
	line-height: 1.5;
	font-weight: 400;
	vertical-align: baseline;
	list-style-type: none;
	font-synthesis: none;
	color: var(--gray-100);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  outline: none;
}

:root {
        --primary-color: #D39B88;
		--primary-rgba: 255, 236, 218;

        --primary-green: #679F7D;
        --secondary-green: #4A724C;
        --tertiary-green: #8AB59B;

        --primary-red: #A93939;
        --secondary-red: #651A1A;

        --primary-gray: #B7B7B7;
        --secondary-gray: #D9D9D9;
		--tertiary-gray: #A9A9A9;

		--white: #FFFFFF;
		--black: #000000;
		--primary-black: 0, 0, 0;
    }

	
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    display: block;
    background-color: var(--white);
	width: 100%;
	height: 100vh;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
	cursor: pointer;
}
`