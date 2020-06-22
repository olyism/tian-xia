import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import { BREAKPOINTS, CONTEXTUAL_COLOR, SPACING } from '../../constants/theme.js';

const StyledNav = styled.nav`
  display: none;
  margin-left: auto;

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: block;
  }
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledItem = styled.li`
  margin-left: ${SPACING['8']};
`;

const GatsbyLink = ({ className, children, to }) => <Link className={className} to={to}>{children}</Link>;

const StyledLink = styled(GatsbyLink)`
  color: ${CONTEXTUAL_COLOR.HEADING};
  font-weight: bold;
  text-decoration: none;
`;

const NavbarLinks = () => (
  <StyledNav>
    <StyledList>
      <StyledItem><StyledLink to="/">Home</StyledLink></StyledItem>
      <StyledItem><StyledLink to="/#about-us">About us</StyledLink></StyledItem>
      <StyledItem><StyledLink to="/#what-we-offer">What we offer</StyledLink></StyledItem>
      <StyledItem><StyledLink to="/#testimonials">Testimonials</StyledLink></StyledItem>
      <StyledItem><StyledLink to="/enquire">Enquire</StyledLink></StyledItem>
    </StyledList>
  </StyledNav>
);

export default NavbarLinks;
