import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  number,
  shape,
  string,
} from 'prop-types';
import styled from 'styled-components';
import {
  BORDER_RADIUS,
  BREAKPOINTS,
  COLOR,
  CONTEXTUAL_COLOR,
  FONT_SIZE,
  GUTTER_WIDTH,
  LINE_HEIGHT,
  SHADOW,
  SPACING
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
  if ((index + 1) % 3 === 0) {
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

  if ((index + 1) % 6 === 0) {
    return `
      &::after {
        @media (min-width: ${BREAKPOINTS.MD}) {
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
  display: flex;
  flex-direction: column;
  transition: box-shadow .25s;
  padding: ${SPACING['5']};
  width: 100%;

  @media (min-width: ${BREAKPOINTS.SM}) {
    height: 144px;
  }

  ${({ disabled }) => !disabled && `
    cursor: pointer;

    &:active {
      border-color: ${COLOR.CLARET};
    }

    &:hover {
      box-shadow: ${SHADOW.BUTTON};
    }
  `}
`;

const StyledImg = styled.img`
  display: block;
  margin: auto;
  max-height: 60px;
  max-width: 100%;
`;

const StyledLink = styled.span`
  border-bottom: 1px solid ${CONTEXTUAL_COLOR.INFO.TONE40};
  color: ${CONTEXTUAL_COLOR.LINK.LINK};
  display: inline-block;
  font-size: ${FONT_SIZE.SUBTEXT};
  margin: 12px auto 0;
  text-align: center;
`;

const StyledBreak = styled.li`
  @media (min-width: ${BREAKPOINTS.SM}) and (max-width: ${BREAKPOINTS.SM_MAX}) {
    flex-basis: 100%;
    height: 0;
  }

  ${({ i }) => (i + 1 ) % 6 === 0 && `
    @media (min-width: ${BREAKPOINTS.MD}) {
      flex-basis: 100%;
      height: 0;
    }
  `}
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
  const [ modalIsOpen, setIsOpen ] = useState(false);
  const openModal = () => { 
    setIsOpen(true); 
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledLI i={i}>
        <StyledButton disabled={!quotes || quotes.length === 0} onClick={openModal}>
          <StyledImg alt={partnerName} src={logo.publicURL} />
          {quotes && quotes.length ? <StyledLink>View testimonial</StyledLink> : null}
        </StyledButton>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="Modal" overlayClassName="Overlay">
          <StyledCloseButton onClick={closeModal}><img alt="Close icon" src={ic_close} /><span>Close</span></StyledCloseButton>
          {quotes && <LogoContent quotes={quotes} />}
        </Modal>
      </StyledLI>
      {(i + 1) % 3 === 0 ? <StyledBreak i={i} /> : null}
    </>
  );
};

Logo.propTypes = {
  logo: shape({
    extension: string.isRequired,
    publicURL: string.isRequired,
  }).isRequired,
  partnerName: string.isRequired,
  i: number.isRequired,
};

Logo.defaultProps = {
  quotes: null,
};

export default Logo;
