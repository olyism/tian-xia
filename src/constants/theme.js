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
  XS_MAX: '767px',
  SM: '768px',
  SM_MAX: '1023px',
  MD: '1024px',
  MD_MAX: '1279px',
  LG: '1280px',
};

const SPACING = {
  '0': `0px`,
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
  SUBHEADING: COLOR.TUNA,
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

const FONT_SIZE = {
  BASE: '14px',
  TEXT: '1.3571rem',
  SUBTEXT: '1rem',
  LEAD: '1.7143rem',
  SUBHEADING: '2.2857rem',
  HEADING: '3.4285rem',
};

const LINE_HEIGHT = {
  BASE: `${SPACING['5']}`,
  TEXT: `${SPACING['8']}`,
  SUBTEXT: `${SPACING['5']}`,
  LEAD: `${SPACING['8']}`,
  SUBHEADING: `${SPACING['13']}`,
  HEADING: `${SPACING['13']}`,
};

const HEADING = {
  'H1': {
    COLOR: CONTEXTUAL_COLOR.HEADING,
    FONT_FAMILY: FONT_STACK.SANS_SERIF,
    FONT_SIZE: FONT_SIZE.HEADING,
    FONT_WEIGHT: 'bold',
    LINE_HEIGHT: LINE_HEIGHT.HEADING,
    MARGIN_BOTTOM: LINE_HEIGHT.BASE,
    MARGIN_TOP: `${SPACING['0']}`,
  },
  'H2': {
    COLOR: CONTEXTUAL_COLOR.HEADING,
    FONT_FAMILY: FONT_STACK.SANS_SERIF,
    FONT_SIZE: FONT_SIZE.SUBHEADING,
    FONT_WEIGHT: 'bold',
    LINE_HEIGHT: LINE_HEIGHT.SUBHEADING,
    MARGIN_BOTTOM: LINE_HEIGHT.BASE,
    MARGIN_TOP: `${SPACING['0']}`,
  },
  'H3': {
    COLOR: CONTEXTUAL_COLOR.HEADING,
    FONT_FAMILY: FONT_STACK.SANS_SERIF,
    FONT_SIZE: FONT_SIZE.LEAD,
    FONT_WEIGHT: 'bold',
    LINE_HEIGHT: LINE_HEIGHT.LEAD,
    MARGIN_BOTTOM: LINE_HEIGHT.BASE,
    MARGIN_TOP: `${SPACING['0']}`,
  },
  'H4': {
    COLOR: CONTEXTUAL_COLOR.HEADING,
    FONT_FAMILY: FONT_STACK.SANS_SERIF,
    FONT_SIZE: FONT_SIZE.TEXT,
    FONT_WEIGHT: 'bold',
    LINE_HEIGHT: LINE_HEIGHT.TEXT,
    MARGIN_BOTTOM: LINE_HEIGHT.BASE,
    MARGIN_TOP: `${SPACING['0']}`,
  },
  'H5': {
    COLOR: CONTEXTUAL_COLOR.HEADING,
    FONT_FAMILY: FONT_STACK.SANS_SERIF,
    FONT_SIZE: FONT_SIZE.BASE,
    FONT_WEIGHT: 'bold',
    LINE_HEIGHT: LINE_HEIGHT.TEXT,
    MARGIN_BOTTOM: LINE_HEIGHT.BASE,
    MARGIN_TOP: `${SPACING['0']}`,
  },
  'H6': {
    COLOR: CONTEXTUAL_COLOR.HEADING,
    FONT_FAMILY: FONT_STACK.SANS_SERIF,
    FONT_SIZE: FONT_SIZE.SUBTEXT,
    FONT_WEIGHT: 'bold',
    LINE_HEIGHT: LINE_HEIGHT.SUBTEXT,
    MARGIN_BOTTOM: LINE_HEIGHT.BASE,
    MARGIN_TOP: `${SPACING['0']}`,
  },
};

const PARAGRAPH = {
  COLOR: CONTEXTUAL_COLOR.TEXT,
  FONT_FAMILY: FONT_STACK.SERIF,
  FONT_SIZE: FONT_SIZE.TEXT,
  FONT_WEIGHT: 'normal',
  LINE_HEIGHT: LINE_HEIGHT.TEXT,
  MARGIN_BOTTOM: LINE_HEIGHT.BASE,
  MARGIN_TOP: `${SPACING['0']}`,
};

const BORDER_RADIUS = {
  CORNER: '16px',
  CIRCLE: '50%',
};

const SHADOW = {
  BOX: '0px 4px 8px rgba(0, 0, 0, .15)',
  TEXT: '0px 2px 2px rgba(0, 0, 0, 0.25)',
};

const Z_INDEX = {
  FLOATING: 10,
  STICKY: 100,
};

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
  FONT_SIZE,
  LINE_HEIGHT,
  HEADING,
  PARAGRAPH,
  BORDER_RADIUS,
  SHADOW,
  Z_INDEX,
};
