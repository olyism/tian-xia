import styled from 'styled-components';
import { CONTAINER_WIDTH, SPACING } from '../../constants/theme.js';
import img from '../../img/border.svg';

const Divider = styled.hr`
  background-image: url('${img}');
  background-position: 50% 50%;
  background-repeat: repeat-x;
  border: none;
  height: ${SPACING['5']};
  margin: ${SPACING['5']} auto;
  max-width: ${CONTAINER_WIDTH};
`;

export default Divider;
