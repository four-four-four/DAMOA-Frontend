import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Lato';
    src: local('Lato'), url(./fonts/Lato-Regular.otf) format('opentype');
}
`;

export default FontStyles;
