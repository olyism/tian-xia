import React from 'react';
import styled from 'styled-components';
import { 
  arrayOf,
  string,
  shape
} from 'prop-types';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Heading from '../Heading';
import CardCarousel from '../CardCarousel';
import Spacer from '../Spacer';
import defaultImg from '../../img/patrick-xu-OMqYNbc0i4A-unsplash.jpg';
import {
  BREAKPOINTS,
  COLOR,
  SHADOW,
  SPACING,
  Z_INDEX
} from '../../constants/theme.js'

const StyledFooter = styled.footer`
  background: ${COLOR.TUNA} url('${({ img }) => img || defaultImg}') 50% 50% no-repeat;
  background-size: cover;
  color: ${COLOR.WHITE};
  padding-bottom: ${SPACING[5]};
  padding-top: ${SPACING[13]};
  position: relative;

  &::after {
    background: ${COLOR.CLARET};
    content: " ";
    height: 100%;
    left: 0;
    opacity: .85;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: ${Z_INDEX.FLOATING};
  }
`;

const StyledFooterContainer = styled(Container)`
  position: relative;
  z-index: ${Z_INDEX.HOVERING};
`;

const StyledLink = styled.a`
  color: ${COLOR.WHITE};
  border-bottom: 2px solid rgba(255, 255, 255, .25);
  text-decoration: none;
  transition: border-color .25s;

  &:hover {
    border-bottom-color: rgba(255, 255, 255, .5);
  }
`;

const StyledCardCarouselContainer = styled.div`
  margin-bottom: 32px;
`;

const StyledHeading = styled(Heading)`
  color: ${COLOR.WHITE};
  text-shadow: ${SHADOW.TEXT};
`;

const StyledRightText = styled.div`
  @media (min-width: ${BREAKPOINTS.SM}) {
    text-align: right;
  }
`;

const Footer = ({ fellows }) => (
  <StyledFooter img={fellows.footerImg.publicURL}>
    <StyledFooterContainer>
      {fellows.testimonials && fellows.testimonials.length !== 0 &&
        <>
          <StyledCardCarouselContainer>
            {fellows.title && <>
              <StyledHeading level="2">{fellows.title}</StyledHeading>
              <Spacer spacing="8" />
            </>}
            <CardCarousel data={fellows.testimonials} />
          </StyledCardCarouselContainer>
          <Spacer spacing="8" />
        </>
      }
      <Row>
        <Col xs={12} sm={6}>
          Copyright &copy; {new Date().getFullYear()} Tianxia Fellowship. <StyledLink href="/page/terms">Terms of use</StyledLink>
        </Col>
        <Col xs={12} sm={6}>
          <StyledRightText>
            <StyledLink href="mailto:info@tian-xia.com">info@tian-xia.com</StyledLink>
          </StyledRightText>
        </Col>
      </Row>
    </StyledFooterContainer>
  </StyledFooter>
);

Footer.propTypes = {
  fellows: shape({
    title: string,
    testimonials: arrayOf(shape({
      quote: string,
      author: string,
    })),
    footerImg: shape({
      publicURL: string,
      extension: string,
    }),
  }),
};

Footer.defaultProps = {
  fellows: {
    footerImg: {
      publicURL: '',
      extension: '',
    }
  },
}

export default Footer;
