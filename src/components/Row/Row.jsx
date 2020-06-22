import styled from 'styled-components';
import { GUTTER_WIDTH } from '../../constants/theme.js'

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -${GUTTER_WIDTH};
  margin-right: -${GUTTER_WIDTH};
`;

export default Row;
