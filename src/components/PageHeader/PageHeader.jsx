import React from 'react';
import {
  arrayOf,
  oneOfType,
  node,
  string
} from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';
import Heading from '../Heading';
import {
  BREAKPOINTS,
  COLOR,
  NAVBAR_HEIGHT,
  SHADOW,
  SPACING,
  Z_INDEX
} from '../../constants/theme';
import defaultImg from '../../img/ken-lawrence-tDPMSTDPdUM-unsplash.jpg';

const StyledHeading = styled(Heading)`
  color: ${COLOR.WHITE};
  margin: 0;
  padding: ${SPACING['8']} 0;
  position: relative;
  text-shadow: ${SHADOW.TEXT};
  z-index: ${Z_INDEX.FLOATING};

  @media (min-width: ${BREAKPOINTS.SM}) {
    padding: ${SPACING['13']} 0;
  }
`;

const Component = ({ title, backgroundImage, className }) => (
  <header backgroundImage={backgroundImage} className={className}>
    <Container>
      <StyledHeading level={1}>{title}</StyledHeading>
    </Container>
  </header>
);

const PageHeader = styled(Component)`
  background-color: ${COLOR};
  background-image: url('${({ backgroundImage }) => backgroundImage || defaultImg}');
  background-position: 50% 50%;
  background-size: cover;
  margin: 0 0 ${SPACING['8']};
  padding-top: ${NAVBAR_HEIGHT};
  position: relative;

  &::after {
    background: rgba(0, 0, 0, .5);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

Component.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node
  ]),
  className: string,
  title: string.isRequired,
};

Component.defaultProps = {
  children: null,
  className: '',
};

export default PageHeader;
