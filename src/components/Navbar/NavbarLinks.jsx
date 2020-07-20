import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import Scrollspy from 'react-scrollspy';
import { BREAKPOINTS, COLOR, CONTEXTUAL_COLOR, SPACING } from '../../constants/theme.js';
import Button from '../Button';

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
  border-bottom: 2px solid ${COLOR.WHITE};
  box-sizing: border-box;
  color: ${CONTEXTUAL_COLOR.HEADING};
  font-weight: bold;
  margin-left: ${SPACING['8']};
  padding-top: 2px;
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  margin-left: ${SPACING['8']};
  min-width: 100px;
  padding: 8px 16px;
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
        <StyledLink href="/#home">Home</StyledLink>
        <StyledLink href="/#about-us">About us</StyledLink>
        <StyledLink href="/#what-we-offer">What we offer</StyledLink>
        <StyledLink href="/#testimonials">Testimonials</StyledLink>
      </StyledScrollspy>
      <StyledButton btnStyle="primary" to="mailto:info@tian-xia.com">Inquire</StyledButton>
    </StyledNav>
  </>
);

export default NavbarLinks;
