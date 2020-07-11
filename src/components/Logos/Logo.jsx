import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  arrayOf,
  bool,
  number,
  shape,
  string,
} from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import {
  BORDER_RADIUS,
  BREAKPOINTS,
  COLOR,
  CONTEXTUAL_COLOR,
  FONT_SIZE,
  GUTTER_WIDTH,
  LINE_HEIGHT,
  SHADOW,
  SPACING,
  Z_INDEX
} from '../../constants/theme';
import LogoContent from './LogoContent';
import ic_close from '../../img/ic_close.svg';

const StyledLI = styled.li`
flex: 1;
margin: 0 0 ${LINE_HEIGHT.BASE};

@media (min-width: ${BREAKPOINTS.SM}) {
  max-width: 186px;
  padding: 0 ${GUTTER_WIDTH};
}

${({ index }) => {
  if ((index + 1) % 6 === 0) {
    return `
      &::after {
        @media (min-width: ${BREAKPOINTS.SM}) {
          content: " ";
          flex-basis: 100%;
          height: 0;
        }
      }
    `;
  }
}}
`;

const StyledButton = styled.button`
  background: ${COLOR.WHITE};
  border: 2px solid ${COLOR.IRON};
  border-radius: ${BORDER_RADIUS.CORNER};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: box-shadow .25s;
  padding: ${SPACING['5']};
  width: 100%;

  @media (min-width: ${BREAKPOINTS.SM}) {
    height: 144px;
  }

  &:active {
    border-color: ${COLOR.CLARET};
  }

  &:hover {
    box-shadow: ${SHADOW.BUTTON};
  }
`;

const StyledImg = styled.img`
  display: block;
  margin: 0 auto ${LINE_HEIGHT.SUBTEXT};
  max-height: 60px;
`;

const StyledLink = styled.span`
  border-bottom: 1px solid ${CONTEXTUAL_COLOR.INFO.TONE40};
  color: ${CONTEXTUAL_COLOR.LINK.LINK};
  display: none;
  font-size: ${FONT_SIZE.SUBTEXT};
  margin: auto auto 0;
  text-align: center;

  @media (min-width: ${BREAKPOINTS.SM}) {
    display: inline-block;
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

const StyledCloseButton = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  margin-bottom: ${SPACING['5']};
  margin-left: ${SPACING['5']};
  margin-top: ${SPACING['5']};
  min-width: 85px;
  padding: 0 ${SPACING['3']};
`;

const Logo = ({ quotes, logo, partnerName, i }) => {
  Modal.setAppElement('#___gatsby');
  const [ modalIsOpen, setIsOpen ] = useState(false);
  const openModal = () => { 
    setIsOpen(true); 
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <StyledLI i={i}>
      <StyledButton disabled={quotes.length === 0} onClick={openModal}>
        <StyledImg alt={partnerName} src={logo} />
        {quotes.length ? <StyledLink>View testimonial</StyledLink> : null}
      </StyledButton>
      <ModalStyles />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="Modal" overlayClassName="Overlay">
        {<StyledCloseButton onClick={closeModal}><img alt="Close icon" src={ic_close} /><span>Close</span></StyledCloseButton>}
        <LogoContent quotes={quotes} />
      </Modal>
    </StyledLI>
  );
};

Logo.propTypes = {
  quotes: arrayOf(shape({
    quote: string.isRequired,
    author: string.isRequired,
    isPreviouslyEmployed: bool.isRequired,
  })),
  logo: string.isRequired,
  partnerName: string.isRequired,
  i: number.isRequired,
};

Logo.defaultProps = {
  quotes: [],
};

export default Logo;
