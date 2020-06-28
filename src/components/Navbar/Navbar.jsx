import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'
import Container from '../Container';
import { BROWSER_CONTEXT, COLOR, SHADOW, SPACING, Z_INDEX } from '../../constants/theme.js';
import Hamburger from './Hamburger';
import NavbarLinks from './NavbarLinks';
import logo from '../../img/logo.svg'

const StyledNavbar = styled.div`
  background: ${COLOR.WHITE};
  box-shadow: ${SHADOW.BOX};
  box-sizing: border-box;
  left: 0px;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: ${Z_INDEX.STICKY};
`;

const StyledNavbarContainer = styled(Container)`
  align-items: center;
  display: flex;
`;

const StyledLogo = styled.img`
  height: ${BROWSER_CONTEXT * 14}px;
  margin-bottom: ${SPACING['3']};
  margin-top: ${SPACING['3']};
`;

const StyledAlignRight = styled.div`
  align-items: center;  
  display: flex;
  height: 100%;
  margin-left: auto;
`;

const Navbar = () => (
  <header> 
    <StyledNavbar>
      <StyledNavbarContainer>
        <Link to="/">
          <StyledLogo alt="Tianxia Fellowship logo" src={logo} />
        </Link>
        <StyledAlignRight>
          <NavbarLinks />
          <Hamburger />
        </StyledAlignRight>
      </StyledNavbarContainer>
    </StyledNavbar>
  </header>
);

export default Navbar;
