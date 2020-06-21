const BROWSER_CONTEXT = 4;

const GUTTER_WIDTH = '15px';

const CONTAINER_WIDTH = '1280px';

const COLUMN_WIDTH = {
  '1': '8.3333%',
  '2': '16.6667%',
  '3': '25%',
  '4': '33.3333%',
  '5': '41.6667%',
  '6': '50%',
  '7': '58.3333%',
  '8': '66.6667%',
  '9': '75%',
  '10': '83.3333%',
  '11': '91.6667%',
  '12': '100%',
};

const BREAKPOINTS = {
  XS: '375px',
  SM: '768px',
  MD: '1024px',
  LG: '1280px',
};

const SPACING = {
  '1': `${BROWSER_CONTEXT}px`,
  '2': `${BROWSER_CONTEXT * 2}px`,
  '3': `${BROWSER_CONTEXT * 3}px`,
  '5': `${BROWSER_CONTEXT * 5}px`,
  '8': `${BROWSER_CONTEXT * 8}px`,
  '13': `${BROWSER_CONTEXT * 13}px`,
  '21': `${BROWSER_CONTEXT * 21}px`,
  '34': `${BROWSER_CONTEXT * 34}px`,
};

const COLOR = {
  // Grays
  BLACK: '#000000',
  TUNA: '#353536',
  ABBEY: '#4D4D4E',
  SCARPA_FLOW: '#5B5B5C',
  MONTROSE: '#9A9A9C',
  IRON: '#D9D9DB',
  WHITE: '#ffffff',

  // Yellows
  APACHE: '#E3C36F',
  COSTA_DEL_SOL: '#5E512E',
  BRANDY: '#DDD0AE',

  // Greens
  PASTEL_GREEN: '#86E391',
  KILLARNEY: '#385E3C',
  SEA_MIST: '#C5DEC8',

  // Blues
  ROYAL_BLUE: '#597EE3',
  CLOUD_BURST: '#25345E',
  COLD_PURPLE: '#99ABDE',

  // Reds
  DEEP_BLUSH: '#E36491',
  BUCCANEER: '#5E2A3C',
  CAN_CAN: '#DEA4B8',
};

const CONTEXTUAL_COLOR = {
  HEADING: COLOR.TUNA,
  TEXT: COLOR.ABBEY,
  SUBTEXT: COLOR.SCARPA_FLOW,

  LINK: {
    LINK: COLOR.CLOUD_BURST,
    VISITED: COLOR.CLOUD_BURST,
    HOVER: COLOR.ROYAL_BLUE,
    ACTIVE: COLOR.DEEP_BLUSH,
  },

  INFO: {
    MAIN: COLOR.ROYAL_BLUE,
    DARK: COLOR.CLOUD_BURST,
    TONE100: COLOR.COLD_PURPLE,
    TONE80: '#ADBCE5',
    TONE60: '#C2CDEB',
    TONE40: '#D6DDF2',
    TONE20: '#EBEEF8',
  },

  SUCCESS: {
    MAIN: COLOR.PASTEL_GREEN,
    DARK: COLOR.KILLARNEY,
    TONE100: COLOR.SEA_MIST,
    TONE80: '#D1E5D3',
    TONE60: '#DCEBDE',
    TONE40: '#E8F2E9',
    TONE20: '#F3F8F4',
  },

  WARNING: {
    MAIN: COLOR.APACHE,
    DARK: COLOR.COSTA_DEL_SOL,
    TONE100: COLOR.BRANDY,
    TONE80: '#E4D9BE',
    TONE60: '#EBE3CE',
    TONE40: '#F1ECDF',
    TONE20: '#F8F6EF',
  },

  DANGER: {
    MAIN: COLOR.DEEP_BLUSH,
    DARK: COLOR.BUCCANEER,
    TONE100: COLOR.CAN_CAN,
    TONE80: '#E5B6C6',
    TONE60: '#EBC8D4',
    TONE40: '#F2DBE3',
    TONE20: '#F8EDF1',
  },
};

const FONT_FAMILY = {
  SERIF: 'Merriweather',
  SANS_SERIF: 'Lato',
};

const FONT_STACK = {
  SYSTEM: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  SERIF: `${FONT_FAMILY.SERIF}, serif`,
  SANS_SERIF: `${FONT_FAMILY.SANS_SERIF}, sans-serif`,
};

const FONT_SIZE_BASE = '14px';

const LINE_HEIGHT_BASE = SPACING['5'];

export {
  BROWSER_CONTEXT,
  GUTTER_WIDTH,
  CONTAINER_WIDTH,
  COLUMN_WIDTH,
  BREAKPOINTS,
  SPACING,
  COLOR,
  CONTEXTUAL_COLOR,
  FONT_FAMILY,
  FONT_STACK,
  FONT_SIZE_BASE,
  LINE_HEIGHT_BASE
};
