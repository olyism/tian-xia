import { createGlobalStyle } from 'styled-components';
import { 
  CONTEXTUAL_COLOR,
  FONT_SIZE_BASE, 
  LINE_HEIGHT_BASE, 
  FONT_FAMILY, 
  FONT_STACK 
} from '../../../constants/theme.js';
import LatoRegularWoff2 from './lato-v16-latin-regular.woff2';
import LatoRegularWoff from './lato-v16-latin-regular.woff';
import LatoItalicWoff2 from './lato-v16-latin-italic.woff2';
import LatoItalicWoff from './lato-v16-latin-italic.woff';
import LatoBlackWoff2 from './lato-v16-latin-900.woff2';
import LatoBlackWoff from './lato-v16-latin-900.woff';
import LatoBlackItalicWoff2 from './lato-v16-latin-900italic.woff2';
import LatoBlackItalicWoff from './lato-v16-latin-900italic.woff';
import MerriweatherRegularWoff2 from './merriweather-v21-latin-regular.woff2';
import MerriweatherRegularWoff from './merriweather-v21-latin-regular.woff';
import MerriweatherItalicWoff2 from './merriweather-v21-latin-italic.woff2';
import MerriweatherItalicWoff from './merriweather-v21-latin-italic.woff';
import MerriweatherBoldWoff2 from './merriweather-v21-latin-700.woff2';
import MerriweatherBoldWoff from './merriweather-v21-latin-700.woff';
import MerriweatherBoldItalicWoff2 from './merriweather-v21-latin-700italic.woff2';
import MerriweatherBoldItalicWoff from './merriweather-v21-latin-700italic.woff';

const { SERIF, SANS_SERIF } = FONT_STACK;

const TypographyStyles = createGlobalStyle`
  @font-face {
    font-family: '${SERIF}';
    font-style: normal;
    font-weight: normal;
    src: local('${SERIF} Regular'), local('${SERIF}-Regular'),
        url('${LatoRegularWoff2}') format('woff2'),
        url('${LatoRegularWoff}') format('woff');
  }

  @font-face {
    font-family: '${SERIF}';
    font-style: italic;
    font-weight: normal;
    src: local('${SERIF} Italic'), local('${SERIF}-Italic'),
        url('${LatoItalicWoff2}') format('woff2'),
        url('${LatoItalicWoff}') format('woff');
  }

  @font-face {
    font-family: '${SERIF}';
    font-style: normal;
    font-weight: bold;
    src: local('${SERIF} Black'), local('${SERIF}-Black'),
        url('${LatoBlackWoff2}') format('woff2'),
        url('${LatoBlackWoff}') format('woff');
  }

  @font-face {
    font-family: '${SERIF}'; 
    font-style: italic;
    font-weight: bold;
    src: local('${SERIF} Black Italic'), local('${SERIF}-BlackItalic'),
        url('${LatoBlackItalicWoff2}') format('woff2'),
        url('${LatoBlackItalicWoff}') format('woff');
  }

  @font-face {
    font-family: '${SANS_SERIF}';
    font-style: normal;
    font-weight: 400;
    src: local('${SANS_SERIF} Regular'), local('${SANS_SERIF}-Regular'),
        url('${MerriweatherRegularWoff2}') format('woff2'),
        url('${MerriweatherRegularWoff}') format('woff');
  }

  @font-face {
    font-family: '${SANS_SERIF}';
    font-style: italic;
    font-weight: 400;
    src: local('${SANS_SERIF} Italic'), local('${SANS_SERIF}-Italic'),
        url('${MerriweatherItalicWoff2}') format('woff2'),
        url('${MerriweatherItalicWoff}') format('woff');
  }

  @font-face {
    font-family: '${SANS_SERIF}';
    font-style: normal;
    font-weight: bold;
    src: local('${SANS_SERIF} Bold'), local('${SANS_SERIF}-Bold'),
        url('${MerriweatherBoldWoff2}') format('woff2'),
        url('${MerriweatherBoldWoff}') format('woff');
  }

  @font-face {
    font-family: '${SANS_SERIF}';
    font-style: italic;
    font-weight: bold;
    src: local('${SANS_SERIF} Bold Italic'), local('${SANS_SERIF}-BoldItalic'),
        url('${MerriweatherBoldItalicWoff2}') format('woff2'),
        url('${MerriweatherBoldItalicWoff}') format('woff');
  }

  body {
    color: ${CONTEXTUAL_COLOR.TEXT};
    font-family: ${SANS_SERIF};
    font-size: ${FONT_SIZE_BASE};
    line-height: ${LINE_HEIGHT_BASE};
  }
`;

export default TypographyStyles;
