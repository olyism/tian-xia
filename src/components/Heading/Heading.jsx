import React from 'react';
import styled from 'styled-components';
import { arrayOf, node, oneOf, oneOfType, } from 'prop-types';
import { CONTEXTUAL_COLOR, FONT_SIZE, FONT_STACK, HEADING } from '../../constants/theme.js';

const { H1, H2, H3, H4, H5, H6 } = HEADING;

const StyledHeadings = {
  '1': styled.h1`
    color: ${H1.COLOR};
    font-family: ${H1.FONT_FAMILY};
    font-size: ${H1.FONT_SIZE};
    font-weight: ${H1.FONT_WEIGHT};
    line-height: ${H1.LINE_HEIGHT};
    margin-bottom: ${H1.MARGIN_BOTTOM};
    margin-top: ${H1.MARGIN_TOP};
  `,
  '2': styled.h2`
    color: ${H2.COLOR};
    font-family: ${H2.FONT_FAMILY};
    font-size: ${H2.FONT_SIZE};
    font-weight: ${H2.FONT_WEIGHT};
    line-height: ${H2.LINE_HEIGHT};
    margin-bottom: ${H2.MARGIN_BOTTOM};
    margin-top: ${H2.MARGIN_TOP};
  `,
  '3': styled.h3`
    color: ${H3.COLOR};
    font-family: ${H3.FONT_FAMILY};
    font-size: ${H3.FONT_SIZE};
    font-weight: ${H3.FONT_WEIGHT};
    line-height: ${H3.LINE_HEIGHT};
    margin-bottom: ${H3.MARGIN_BOTTOM};
    margin-top: ${H3.MARGIN_TOP};
  `,
  '4': styled.h4`
    color: ${H4.COLOR};
    font-family: ${H4.FONT_FAMILY};
    font-size: ${H4.FONT_SIZE};
    font-weight: ${H4.FONT_WEIGHT};
    line-height: ${H4.LINE_HEIGHT};
    margin-bottom: ${H4.MARGIN_BOTTOM};
    margin-top: ${H4.MARGIN_TOP};
  `,
  '5': styled.h5`
    color: ${H5.COLOR};
    font-family: ${H5.FONT_FAMILY};
    font-size: ${H5.FONT_SIZE};
    font-weight: ${H5.FONT_WEIGHT};
    line-height: ${H5.LINE_HEIGHT};
    margin-bottom: ${H5.MARGIN_BOTTOM};
    margin-top: ${H5.MARGIN_TOP};
  `,
  '6': styled.h6`
    color: ${H6.COLOR};
    font-family: ${H6.FONT_FAMILY};
    font-size: ${H6.FONT_SIZE};
    font-weight: ${H6.FONT_WEIGHT};
    line-height: ${H6.LINE_HEIGHT};
    margin-bottom: ${H6.MARGIN_BOTTOM};
    margin-top: ${H6.MARGIN_TOP};
  `,
}

const Heading = ({ level, children }) => {
  const Heading = StyledHeadings[level];
  return <Heading>{children}</Heading>;
};

Heading.propTypes = {
  level: oneOf(['1', '2', '3', '4', '5', '6']),
  children: oneOfType([
    arrayOf(node),
    node
  ]),
};

Heading.defaultProps = {
  level: '2',
  children: '',
}

export default Heading;
