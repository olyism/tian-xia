import React from 'react';
import Modal from 'react-modal';
import styled, { createGlobalStyle } from 'styled-components';
import { 
  arrayOf,
  shape,
  string
} from 'prop-types';
import {
  BORDER_RADIUS,
  BREAKPOINTS,
  COLOR,
  GUTTER_WIDTH,
  SPACING,
  Z_INDEX
} from '../../constants/theme.js';
import Logo from './Logo';

const StyledLogos = styled.ol`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 auto ${SPACING['13']};
  padding: 0;

  @media (min-width: ${BREAKPOINTS.SM}) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ModalStyles = createGlobalStyle`
  .Modal {
    background: ${COLOR.WHITE};
    border-radius: ${BORDER_RADIUS.CORNER};
    bottom: auto;
    height: calc(100% - ${SPACING['8']});
    left: 50%;
    max-width: 620px;
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

Modal.setAppElement('#___gatsby');

const Logos = ({ assets }) => assets && (
  <StyledLogos>
    <ModalStyles />
    {assets.map((asset, i) => (
      <Logo
        partnerName={asset.partnerName}
        quotes={asset.quotes}
        logo={asset.logo}
        Modal={<Modal />}
        key={`logo-${i}`}
        i={i}
      />
    ))}
  </StyledLogos>
);

Logos.propTypes = {
  assets: arrayOf(shape({
    quotes: arrayOf(shape({
      quote: string.isRequired,
      author: string.isRequired,
      footnote: string,
    })),
    logo: shape({
      extension: string.isRequired,
      publicURL: string.isRequired,
    }).isRequired,
    partnerName: string.isRequired,
  })),
};

Logos.defaultProps = {
  assets: [],
};

export default Logos;
