import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Heading from '../Heading';
import Card from '../Card';
import img from '../../img/patrick-xu-OMqYNbc0i4A-unsplash.jpg';
import { COLOR, SHADOW, SPACING } from '../../constants/theme.js'

const StyledFooter = styled.footer`
  background: ${COLOR.TUNA} url('${img}') 50% 50% no-repeat;
  background-size: cover;
  color: ${COLOR.WHITE};
  padding-bottom: ${SPACING[5]};
  padding-top: ${SPACING[13]};
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
  margin-left: auto;
  margin-right: auto;
  max-width: 620px;
  text-shadow: ${SHADOW.TEXT};
`;

const StyledCards = styled.div`
  align-items: stretch;
  display: flex;
  margin: 0 auto 100px;
  max-width: 620px;
`;

const StyledViewport = styled.div`
  overflow: hidden;
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <Row>
        <Col>
          <StyledHeading level="2">Fellows' experience</StyledHeading>
          <StyledCards>
            <Card 
              quote="The Tianxia fellowship was the most concentrated dose of big thinking, new ideas, innovative (and effective) organizations, and amazing people that I have encountered in my professional life." 
              author="Post-graduate student" 
            />
          </StyledCards>
        </Col>
      </Row>
      <Row>
        <Col>
          Copyright &copy; {new Date().getFullYear()} Tianxia Fellowship. <StyledLink href="/terms">Terms of use</StyledLink>
        </Col>
        <Col style={{textAlign: 'right'}}>
          Contact <StyledLink href="mailto:ziya@tian-xia.com">ziya@tian-xia.com</StyledLink>
        </Col>
      </Row>
    </Container>
  </StyledFooter>
);

export default Footer;
