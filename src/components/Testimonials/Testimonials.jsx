import React from 'react';
import styled from 'styled-components';
import { 
  arrayOf,
  bool,
  shape,
  string
} from 'prop-types';
import {
  BORDER_RADIUS,
  BREAKPOINTS,
  COLOR,
  CONTEXTUAL_COLOR,
  FONT_SIZE,
  GUTTER_WIDTH,
  LINE_HEIGHT,
  SHADOW,
  SPACING
} from '../../constants/theme.js';
import Blockquote from '../Blockquote';

const LogoImg = ({ alt, className, src, }) => <img alt={alt} className={className} src={src} />;

const StyledContainer = styled.div`
  margin-bottom: ${SPACING['13']};
`;

const StyledBlockquoteOL = styled.ol`
  list-style: none;
  margin: 0 auto;
  max-width: 620px;
  padding: 0;
`;

const StyledBlockquoteLI = styled.li`
  display: none;
  margin: 0;
`;

const StyledLogoOL = styled.ol`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 auto;
  padding: 0;

  @media (min-width: 620px) {
    max-width: 620px;
  }

  @media (min-width: ${BREAKPOINTS.SM}) {
    flex-direction: row;
    justify-content: center;
  }
`;

const LogoLI = ({partnerName, logo, active, i, className}) => (
  <li key={`testimonial-logo-${i}`} i={i} className={className}>
    <StyledLogoButton active={active}>
      <StyledLogoButtonImg alt={partnerName} src={logo} />
      <StyledLogoButtonLink>View testimonial</StyledLogoButtonLink>
    </StyledLogoButton>
  </li>
);

const StyledLogoLI = styled(LogoLI)`
  flex: 1;
  margin: 0 0 ${LINE_HEIGHT.BASE};
  padding: 0 ${GUTTER_WIDTH};

  @media (min-width: ${BREAKPOINTS.SM}) {
    max-width: 183px;
  }

  ${({ i }) => {
    if ((i + 1) % 6 === 0) {
      return `
        &::after {
          content: " ";
          flex-basis: 100%;
          height: 0;
        }
      `;
    }
  }}
`;

const StyledLogoButton = styled.button`
  background: ${COLOR.WHITE};
  border: 2px solid ${COLOR.IRON};
  border-radius: ${BORDER_RADIUS.CORNER};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: box-shadow .25s;
  padding: ${SPACING['5']};
  width: 100%;

  @media (min-width: ${BREAKPOINTS.SM}) {
    height: 144px;
  }

  &:hover {
    box-shadow: ${SHADOW.BUTTON};
  }

  ${({active}) => (active && (`
    @media (min-width: ${BREAKPOINTS.SM}) {
      border-color: ${COLOR.CLARET};
    }
  `))}
`;

const StyledLogoButtonImg = styled(LogoImg)`
  display: block;
  margin: 0 auto ${LINE_HEIGHT.SUBTEXT};
  max-height: 60px;
`;

const StyledLogoButtonLink = styled.span`
  border-bottom: 1px solid ${CONTEXTUAL_COLOR.INFO.TONE40};
  color: ${CONTEXTUAL_COLOR.LINK.LINK};
  font-size: ${FONT_SIZE.SUBTEXT};
  display: inline-block;
  margin: auto auto 0;
  text-align: center;
`;

const smallPrint = {
  label: '1',
  content: 'This referee was formerly employed at this role.'
};

const Testimonials = ({ testimonials }) => {
  if (testimonials) {
    return (
      <StyledContainer>
        <StyledBlockquoteOL>
          {testimonials.map((testimonial, i) => {
            const smallPrint = testimonial.isPreviouslyEmployed ? smallPrint : {};

            return (
              <StyledBlockquoteLI key={`testimonial-quote-${i}`} style={testimonial.active && { display: 'block'}}>
                <Blockquote quote={testimonial.quotes[0].quote} author={testimonial.quotes[0].author} smallPrint={smallPrint} />
              </StyledBlockquoteLI>
            );
          })}
        </StyledBlockquoteOL>
        <StyledLogoOL>
          {testimonials.map((testimonial, i) => (
            <StyledLogoLI key={`testimonial-logo-${i}`} i={i} partnerName={testimonial.partnerName} logo={testimonial.logo} active={testimonial.active}>
              <StyledLogoButton active={testimonial.active}>
                <StyledLogoButtonImg alt={testimonial.partnerName} src={testimonial.logo} />
                <StyledLogoButtonLink>View testimonial</StyledLogoButtonLink>
              </StyledLogoButton>
            </StyledLogoLI>
          ))}
        </StyledLogoOL>
      </StyledContainer>
    );
  }
};

Testimonials.propTypes = {
  testimonials: arrayOf(shape({
    quotes: arrayOf(shape({
      quote: string.isRequired,
      author: string.isRequired,
      isPreviouslyEmployed: bool.isRequired,
    })),
    logo: string.isRequired,
    partnerName: string.isRequired,
    active: bool.isRequired,
  })),
};

Testimonials.defaultProps = {
  testimonials: [],
};

export default Testimonials;
