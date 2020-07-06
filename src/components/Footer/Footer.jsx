import React, { useState } from 'react';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Heading from '../Heading';
import Card from '../Card';
import img from '../../img/patrick-xu-OMqYNbc0i4A-unsplash.jpg';
import { COLOR, CONTAINER_WIDTH, GUTTER_WIDTH, SHADOW, SPACING, Z_INDEX } from '../../constants/theme.js'

const StyledFooter = styled.footer`
  background: ${COLOR.TUNA} url('${img}') 50% 50% no-repeat;
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

const StyledHeading = styled(Heading)`
  color: ${COLOR.WHITE};
  font-weight: normal;
  text-shadow: ${SHADOW.TEXT};
`;

const StyledCards = styled.div`
  box-sizing: border-box;
  margin: 0 auto 100px;
  max-width: ${CONTAINER_WIDTH};
  padding: 0 40px 0;
`;

const FellowsItemsCarousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <StyledCards>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        numberOfItems={5}
        infiniteLoop={true}
        gutter={GUTTER_WIDTH}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron={true}
        chevronWidth={chevronWidth}
      >
        {/* <div>
          <Card 
            quote="The Tianxia fellowship was the most concentrated dose of big thinking, new ideas, innovative (and effective) organizations, and amazing people that I have encountered in my professional life." 
            author="Post-graduate student" 
          />
        </div>
        <div>
          <Card 
            quote="The Tianxia fellowship was the most concentrated dose of big thinking, new ideas, innovative (and effective) organizations, and amazing people that I have encountered in my professional life." 
            author="Post-graduate student" 
          />
        </div>
        <div>
          <Card 
            quote="The Tianxia fellowship was the most concentrated dose of big thinking, new ideas, innovative (and effective) organizations, and amazing people that I have encountered in my professional life." 
            author="Post-graduate student" 
          />
        </div>
        <div>
          <Card 
            quote="The Tianxia fellowship was the most concentrated dose of big thinking, new ideas, innovative (and effective) organizations, and amazing people that I have encountered in my professional life." 
            author="Post-graduate student" 
          />
        </div>
        <div>
          <Card 
            quote="The Tianxia fellowship was the most concentrated dose of big thinking, new ideas, innovative (and effective) organizations, and amazing people that I have encountered in my professional life." 
            author="Post-graduate student" 
          />
        </div> */}
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </ItemsCarousel>
    </StyledCards>
  );
};

const Footer = () => (
  <StyledFooter>
    <StyledFooterContainer>
      <Row>
        <Col>
          <StyledHeading level="2">Fellows' experience</StyledHeading>
          <FellowsItemsCarousel />
        </Col>
      </Row>
      <Row>
        <Col>
          Copyright &copy; {new Date().getFullYear()} Tianxia Fellowship. <StyledLink href="/terms">Terms of use</StyledLink>
        </Col>
        <Col style={{textAlign: 'right'}}>
          Contact <StyledLink href="mailto:info@tian-xia.com">info@tian-xia.com</StyledLink>
        </Col>
      </Row>
    </StyledFooterContainer>
  </StyledFooter>
);

export default Footer;
