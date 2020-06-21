import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, BROWSER_CONTEXT, CONTEXTUAL_COLOR } from '../../constants/theme.js'

const TopBun = styled.div`
  background: ${CONTEXTUAL_COLOR.HEADING};
  height: ${BROWSER_CONTEXT}px;
  width: 100%;
`;

const Patty = styled.div`
  background: ${CONTEXTUAL_COLOR.HEADING};
  height: ${BROWSER_CONTEXT}px;
  width: 100%;
`;

const BottomBun = styled.div`
  background: ${CONTEXTUAL_COLOR.HEADING};
  height: ${BROWSER_CONTEXT}px;
  width: 100%;
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

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: none;
  }
`;

const Hamburger = () => (
  <StyledHamburger>
    <TopBun />
    <Patty />
    <BottomBun />
  </StyledHamburger>
);

export default Hamburger;