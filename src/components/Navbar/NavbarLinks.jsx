import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import { BREAKPOINTS, CONTEXTUAL_COLOR } from '../../constants/theme.js';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledItem = styled.li`
  display: inline-block;
`;

const StyledLink = styled(Link)`
  color: ${CONTEXTUAL_COLOR.LINK};
  text-decoration: none;
`;

const StyledNavbarLinks = styled.nav`
  display: none;
  margin-left: auto;

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: block;
  }
`;

const NavbarLinks = () => (
  <StyledNavbarLinks>
    <StyledList>
      <StyledItem><StyledLink to="/">Home</StyledLink></StyledItem>
      <StyledItem><StyledLink to="/#about-us">About us</StyledLink></StyledItem>
      <StyledItem><StyledLink to="/#what-we-offer">Home</StyledLink></StyledItem>
      <StyledItem><StyledLink to="/#testimonials">Home</StyledLink></StyledItem>
      <StyledItem><StyledLink to="/enquire">Enquire</StyledLink></StyledItem>
    </StyledList>
  </StyledNavbarLinks>
);

export default NavbarLinks;
