import Modal from 'react-modal';
import { createGlobalStyle } from 'styled-components';
import {
  BORDER_RADIUS,
  COLOR,
  GUTTER_WIDTH,
  SPACING,
  Z_INDEX
} from '../../constants/theme';

Modal.setAppElement('#___gatsby');

const ModalStyles = createGlobalStyle`
  .Modal {
    background: ${COLOR.WHITE};
    border-radius: ${BORDER_RADIUS.CORNER};
    bottom: auto;
    left: 50%;
    max-height: calc(100% - ${SPACING['8']});
    max-width: 620px;
    outline: none;
    overflow-y: scroll;
    position: fixed;
    right: auto;
    top: calc(50%);
    transform: translate(-50%, -50%);
    width: calc(100% - ${GUTTER_WIDTH});
    z-index: ${Z_INDEX.MODAL};
  }

  .Overlay {
    background: rgba(0, 0, 0, .75);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: ${Z_INDEX.OVERLAY};
  }
`;

export default ModalStyles;
