import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  BREAKPOINTS, 
  BROWSER_CONTEXT, 
  COLOR,
  CONTEXTUAL_COLOR,
  FONT_SIZE,
  Z_INDEX
} from '../../constants/theme.js'

const TopBun = styled.div`
  background: ${CONTEXTUAL_COLOR.HEADING};
  height: ${BROWSER_CONTEXT}px;
  width: 100%;

  ${({ menuIsOpen }) => menuIsOpen && `
    transform: rotate(45deg) translateX(10px) translateY(10px);
  `}
`;

const Patty = styled.div`
  background: ${CONTEXTUAL_COLOR.HEADING};
  display: ${({ menuIsOpen }) => menuIsOpen ? `none` : `block`};
  height: ${BROWSER_CONTEXT}px;
  width: 100%;
`;

const BottomBun = styled.div`
  background: ${CONTEXTUAL_COLOR.HEADING};
  height: ${BROWSER_CONTEXT}px;
  width: 100%;

  ${({ menuIsOpen }) => menuIsOpen && `
    transform: rotate(-45deg) translateX(9px) translateY(-9px);
  `}
`;

const StyledHamburger = styled.button`
  align-content: space-between;
  box-sizing: border-box;
  background: transparent;
  border-style: none;
  display: flex;
  flex-direction: column;
  height: ${BROWSER_CONTEXT * 12}px;
  justify-content: space-between;
  margin-left: auto;
  padding: ${BROWSER_CONTEXT * 2}px ${BROWSER_CONTEXT}px;
  width: ${BROWSER_CONTEXT * 12}px;
  z-index: ${Z_INDEX.MOBILE_MENU_ACTION};

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: none;
  }
`;

const StyledMenu = styled.nav`
  background: ${COLOR.WHITE};
  display: none;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${Z_INDEX.MOBILE_MENU};

  ${({ menuIsOpen }) => menuIsOpen && `display: block;`}

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: none;
  }
`;

const StyledUL = styled.ul`
  font-size: ${FONT_SIZE.LEAD};
  list-style: none outside;
  margin: 84px 0 0;
  padding: 0;
`;

const StyledLI = styled.li`
  margin: 52px 0;
  text-align: center;
`;

const StyledLink = styled.a`
  color: ${CONTEXTUAL_COLOR.LINK.LINK};
  text-decoration: none;
`;

const Hamburger = () => {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const openMenu = () => { 
    setMenuIsOpen(true); 
  };
  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <>
      <StyledHamburger onClick={menuIsOpen ? closeMenu : openMenu}>
        <TopBun menuIsOpen={menuIsOpen} />
        <Patty menuIsOpen={menuIsOpen} />
        <BottomBun menuIsOpen={menuIsOpen} />
      </StyledHamburger>
      <StyledMenu menuIsOpen={menuIsOpen}>
        <StyledUL>
          <StyledLI><StyledLink href="/#home" onClick={closeMenu}>Home</StyledLink></StyledLI>
          <StyledLI><StyledLink href="/#about-us" onClick={closeMenu}>About us</StyledLink></StyledLI>
          <StyledLI><StyledLink href="/#what-we-offer" onClick={closeMenu}>What we offer</StyledLink></StyledLI>
          <StyledLI><StyledLink href="/#testimonials" onClick={closeMenu}>Testimonials</StyledLink></StyledLI>
        </StyledUL>
      </StyledMenu>
    </>
  );
};

export default Hamburger;