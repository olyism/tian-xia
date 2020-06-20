import styled from 'styled-components';
import {
  CONTAINER_WIDTH,
  GUTTER_WIDTH
} from '../../constants/theme.js';

const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${CONTAINER_WIDTH};
  padding-left: ${GUTTER_WIDTH};
  padding-right: ${GUTTER_WIDTH};
`;

export default Container;
