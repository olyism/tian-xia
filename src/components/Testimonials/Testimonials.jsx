import React, { useState } from 'react';
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

const StyledContainer = styled.div`
  margin-bottom: ${SPACING['13']};
`;

const StyledBlockquoteOL = styled.ol`
  list-style: none;
  margin: 0 auto;
  max-width: 620px;
  padding: 0;
`;

const BlockquoteLI = ({ quote, author, isPreviouslyEmployed, active, i, className}) => (
  <li key={`testimonial-quote-${i}`} i={i} active={active} className={className}>
    <Blockquote 
      quote={quote} 
      author={author} 
      smallPrint={
        isPreviouslyEmployed 
        ? {
          label: '1',
          content: 'This referee was formerly employed at this role.'
        }
        : {}
      } 
    />
  </li>
);

const StyledBlockquoteLI = styled(BlockquoteLI)`
  display: none;
  margin: 0;

  ${({ active, i }) => {
    if (active === i) {
      return `
        @media (min-width: ${BREAKPOINTS.SM}) {
          display: block;
        }
      `
    }
  }}
`;

const StyledLogoOL = styled.ol`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 auto;
  padding: 0;

  @media (min-width: ${BREAKPOINTS.SM}) {
    flex-direction: row;
    justify-content: center;
  }
`;

const LogoLI = ({partnerName, logo, active, setActive, i, className}) => (
  <li key={`testimonial-logo-${i}`} i={i} className={className}>
    <StyledLogoButton
      partnerName={partnerName}
      logo={logo}
      active={active} 
      i={i} 
      setActive={setActive}
    />
  </li>
);

const StyledLogoLI = styled(LogoLI)`
  flex: 1;
  margin: 0 0 ${LINE_HEIGHT.BASE};

  @media (min-width: ${BREAKPOINTS.SM}) {
    max-width: 186px;
    padding: 0 ${GUTTER_WIDTH};
  }

  ${({ i }) => {
    if ((i + 1) % 6 === 0) {
      return `
        &::after {
          @media (min-width: ${BREAKPOINTS.SM}) {
            content: " ";
            flex-basis: 100%;
            height: 0;
          }
        }
      `;
    }
  }}
`;

const LogoButton = ({ partnerName, logo, i, active, setActive, className }) => (
  <button 
    active={active} 
    className={className} 
    i={i} 
    onClick={() => {
      setActive(i);
  }}>
    <StyledLogoButtonImg alt={partnerName} src={logo} />
    <StyledLogoButtonLink style={active !== i ? {} : {display: 'none'}}>
      View testimonial
    </StyledLogoButtonLink>
  </button>
);

const StyledLogoButton = styled(LogoButton)`
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

    ${({ active, i }) => (active === i && (`
      border-color: ${COLOR.CLARET};
    `))}
  }

  &:hover {
    box-shadow: ${SHADOW.BUTTON};
  }
`;

const LogoImg = ({ alt, className, src, }) => <img alt={alt} className={className} src={src} />;

const StyledLogoButtonImg = styled(LogoImg)`
  display: block;
  margin: 0 auto ${LINE_HEIGHT.SUBTEXT};
  max-height: 60px;
`;

const StyledLogoButtonLink = styled.span`
  border-bottom: 1px solid ${CONTEXTUAL_COLOR.INFO.TONE40};
  color: ${CONTEXTUAL_COLOR.LINK.LINK};
  display: none;
  font-size: ${FONT_SIZE.SUBTEXT};
  margin: auto auto 0;
  text-align: center;

  @media (min-width: ${BREAKPOINTS.SM}) {
    display: inline-block;
  }
`;

const Testimonials = ({ testimonials }) => {
  const [active, setActive] = useState(0);

  if (testimonials) {
    return (
      <StyledContainer>
        <StyledBlockquoteOL>
          {testimonials.map((testimonial, i) => (
              <StyledBlockquoteLI
                quote={testimonial.quotes[0].quote}
                author={testimonial.quotes[0].author}
                isPreviouslyEmployed={testimonial.isPreviouslyEmployed}
                i={i}
                active={active}
                key={`testimonial-quote-${i}`}
              />
          ))}
        </StyledBlockquoteOL>
        <StyledLogoOL>
          {testimonials.map((testimonial, i) => <StyledLogoLI key={`testimonial-logo-${i}`} i={i} partnerName={testimonial.partnerName} logo={testimonial.logo} active={active} setActive={setActive} />)}
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
  })),
};

Testimonials.defaultProps = {
  testimonials: [],
};

export default Testimonials;
