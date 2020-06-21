import styled from 'styled-components';
import { oneOf } from 'prop-types';
import { PARAGRAPH } from '../../constants/theme.js';

const Paragraph = styled.p`
  color: ${PARAGRAPH.COLOR};
  font-family: ${PARAGRAPH.FONT_FAMILY};
  font-size: ${PARAGRAPH.FONT_SIZE};
  font-weight: ${PARAGRAPH.FONT_WEIGHT};
  line-height: ${PARAGRAPH.LINE_HEIGHT};
  margin-bottom: ${PARAGRAPH.MARGIN_BOTTOM};
  margin-top: ${PARAGRAPH.MARGIN_TOP};
  text-align: ${props => props.align};
`;

Paragraph.propTypes = {
  align: oneOf(['center', 'left', 'right']),
};

Paragraph.defaultProps = {
  align: 'left',
};

export default Paragraph;
