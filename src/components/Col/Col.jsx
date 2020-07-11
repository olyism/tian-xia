import styled from 'styled-components';
import { arrayOf, node, oneOf, oneOfType } from 'prop-types';
import { BREAKPOINTS, GUTTER_WIDTH, COLUMN_WIDTH } from '../../constants/theme.js';

const getColXsStyles = (xs) => {
  if (xs) {
    return `
      flex-basis: ${COLUMN_WIDTH[xs]};
      max-width: ${COLUMN_WIDTH[xs]};
    `;
  }
  
  return '';
};

const getColSmStyles = (sm) => {
  if (sm) {
    return `
      @media (min-width: ${BREAKPOINTS[sm]}) {
        flex-basis: ${COLUMN_WIDTH[sm]};
        max-width: ${COLUMN_WIDTH[sm]};
      }
    `;
  }

  return '';
};

const getColMdStyles = (md) => {
  if (md) {
    return `
      @media (min-width: ${BREAKPOINTS[md]}) {
        flex-basis: ${COLUMN_WIDTH[md]};
        max-width: ${COLUMN_WIDTH[md]};
      }
    `;
  }

  return '';
};

const getColLgStyles = (lg) => {
  if (lg) {
    return `
      @media (min-width: ${BREAKPOINTS[lg]}) {
        flex-basis: ${COLUMN_WIDTH[lg]};
        max-width: ${COLUMN_WIDTH[lg]};
      }
    `;
  }

  return '';
};

const getResponsiveStyles = ({ xs, sm, md, lg}) => {
  return `
    ${getColXsStyles(xs)}
    ${getColSmStyles(sm)}
    ${getColMdStyles(md)}
    ${getColLgStyles(lg)}
  `;
};

const Col = styled.div`
  flex: 1;
  padding-left: ${GUTTER_WIDTH};
  padding-right: ${GUTTER_WIDTH};
  ${props => getResponsiveStyles(props)}
`;

Col.propTypes = {
  xs: oneOf([undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: oneOf([undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: oneOf([undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: oneOf([undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  children: oneOfType([
    arrayOf(node),
    node
  ]),
};

Col.defaultProps = {
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  children: ''
};

export default Col;
