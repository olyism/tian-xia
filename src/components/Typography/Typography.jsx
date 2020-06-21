import styled from 'styled-components';
import { FONT_STACK, HEADING, PARAGRAPH } from '../../constants/theme.js';

const {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6
} = HEADING;

const Typography = styled.div`
  color: ${PARAGRAPH.COLOR};
  font-family: ${FONT_STACK.SERIF};

  h1 {
    color: ${H1.COLOR};
    font-family: ${H1.FONT_FAMILY};
    font-size: ${H1.FONT_SIZE};
    font-weight: ${H1.FONT_WEIGHT};
    line-height: ${H1.LINE_HEIGHT};
    margin-bottom: ${H1.MARGIN_BOTTOM};
    margin-top: ${H1.MARGIN_TOP};
  }

  h2 {
    color: ${H2.COLOR};
    font-family: ${H2.FONT_FAMILY};
    font-size: ${H2.FONT_SIZE};
    font-weight: ${H2.FONT_WEIGHT};
    line-height: ${H2.LINE_HEIGHT};
    margin-bottom: ${H2.MARGIN_BOTTOM};
    margin-top: ${H2.MARGIN_TOP};
  }

  h3 {
    color: ${H3.COLOR};
    font-family: ${H3.FONT_FAMILY};
    font-size: ${H3.FONT_SIZE};
    font-weight: ${H3.FONT_WEIGHT};
    line-height: ${H3.LINE_HEIGHT};
    margin-bottom: ${H3.MARGIN_BOTTOM};
    margin-top: ${H3.MARGIN_TOP};
  }

  h4 {
    color: ${H4.COLOR};
    font-family: ${H4.FONT_FAMILY};
    font-size: ${H4.FONT_SIZE};
    font-weight: ${H4.FONT_WEIGHT};
    line-height: ${H4.LINE_HEIGHT};
    margin-bottom: ${H4.MARGIN_BOTTOM};
    margin-top: ${H4.MARGIN_TOP};
  }

  h5 {
    color: ${H5.COLOR};
    font-family: ${H5.FONT_FAMILY};
    font-size: ${H5.FONT_SIZE};
    font-weight: ${H5.FONT_WEIGHT};
    line-height: ${H5.LINE_HEIGHT};
    margin-bottom: ${H5.MARGIN_BOTTOM};
    margin-top: ${H5.MARGIN_TOP};
  }

  h6 {
    color: ${H6.COLOR};
    font-family: ${H6.FONT_FAMILY};
    font-size: ${H6.FONT_SIZE};
    font-weight: ${H6.FONT_WEIGHT};
    line-height: ${H6.LINE_HEIGHT};
    margin-bottom: ${H6.MARGIN_BOTTOM};
    margin-top: ${H6.MARGIN_TOP};
  }

  p {
    color: ${PARAGRAPH.COLOR};
    font-family: ${PARAGRAPH.FONT_FAMILY};
    font-size: ${PARAGRAPH.FONT_SIZE};
    font-weight: ${PARAGRAPH.FONT_WEIGHT};
    line-height: ${PARAGRAPH.LINE_HEIGHT};
    margin-bottom: ${PARAGRAPH.MARGIN_BOTTOM};
    margin-top: ${PARAGRAPH.MARGIN_TOP};
  }

  small {
    font-size: ${FONT_SIZE.SUBTEXT};
  }
`;
