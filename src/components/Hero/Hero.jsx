import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import Heading from '../Heading'
import { 
  BREAKPOINTS, 
  COLOR, 
  FONT_SIZE, 
  FONT_STACK, 
  GUTTER_WIDTH, 
  LINE_HEIGHT, 
  SHADOW,
  SPACING,
  Z_INDEX,
  NAVBAR_HEIGHT,
} from '../../constants/theme.js';
import defaultImg from '../../img/ken-lawrence-tDPMSTDPdUM-unsplash.jpg';

const StyledBackground = styled.div`
  align-items: center;
  background: ${COLOR.ABBEY} url('${({ backgroundImage }) => (backgroundImage || defaultImg)}') 50% 50% no-repeat;
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  min-height: 450px;
  padding-left: ${GUTTER_WIDTH};
  padding-right: ${GUTTER_WIDTH};
  padding-top: ${NAVBAR_HEIGHT};
  position: relative;

  @media (min-width: ${BREAKPOINTS.SM}) {
    min-height: 667px;
  }
`;

const StyledGradient = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
  bottom: 0;
  height: 50%;
  left: 0;
  position: absolute;
  width: 100%;

  @media (min-width: ${BREAKPOINTS.SM}) {
    height: 80%;
  }
`;

const StyledHeadingGroup = styled.article`
  margin: 0 auto;
  max-width: 738px;
  padding-bottom: ${SPACING['8']};
  padding-top: ${SPACING['8']};
  position: relative;
  z-index: ${Z_INDEX.FLOATING};
`;

const StyledHeading = styled(Heading)`
  color: ${COLOR.WHITE};
  text-align: center;
  text-shadow: ${SHADOW.TEXT};
`;

const StyledSubheading = styled.p`
  color: ${COLOR.WHITE};
  font-family: ${FONT_STACK.SERIF};
  font-size: ${FONT_SIZE.LEAD};
  line-height: ${LINE_HEIGHT.LEAD};
  margin: 0;
  text-align: center;
  text-shadow: ${SHADOW.TEXT};
`;

const Hero = ({ heading, subheading, backgroundImage }) => (
  <StyledBackground backgroundImage={backgroundImage}>
    <StyledHeadingGroup>
      {heading && <StyledHeading level="1">{heading}</StyledHeading>}
      {subheading && <StyledSubheading>{subheading}</StyledSubheading>}
    </StyledHeadingGroup>
    <StyledGradient />
  </StyledBackground>
);

Hero.propTypes = {
  heading: string,
  subheading: string,
  backgroundImage: string,
};

Hero.defaultProps = {
  heading: '',
  subheading: '',
  backgroundImage: '',
};

export default Hero;
