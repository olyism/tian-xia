import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import Scrollspy from 'react-scrollspy';
import { BREAKPOINTS, COLOR, CONTEXTUAL_COLOR, SPACING } from '../../constants/theme.js';

const ScrollspyStyles = createGlobalStyle`
  .is-current-nav-link {
    border-bottom-color: ${COLOR.DEEP_BLUSH} !important;
  }
`;

const StyledNav = styled.nav`
  align-items: center;
  display: none;
  margin-left: auto;

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: flex;
  }
`;

const StyledScrollspy = styled(Scrollspy)`
  align-items: center;
  display: flex;
  margin: 0;
`;

const StyledLink = styled.a`
  align-items: center;
  border-bottom: 2px solid ${COLOR.WHITE};
  box-sizing: border-box;
  color: ${CONTEXTUAL_COLOR.HEADING};
  font-weight: bold;
  margin-left: ${SPACING['8']};
  padding-top: 2px;
  text-decoration: none;
`;

const NavbarLinks = () => (
  <>
    <ScrollspyStyles />
    <StyledNav>
      <StyledScrollspy 
        items={[
          'home',
          'about-us',
          'what-we-offer',
          'testimonials'
        ]} 
        currentClassName="is-current-nav-link"
        componentTag="div"
      >
        <StyledLink to="/#home">Home</StyledLink>
        <StyledLink to="/#about-us">About us</StyledLink>
        <StyledLink to="/#what-we-offer">What we offer</StyledLink>
        <StyledLink to="/#testimonials">Testimonials</StyledLink>
      </StyledScrollspy>
      <StyledLink to="mailto:info@tian-xia.com">Enquire</StyledLink>
    </StyledNav>
  </>
);

export default NavbarLinks;
