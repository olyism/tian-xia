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

const StyledTestimonials = styled.div`
  margin: 0 auto;
  max-width: 620px;
`;

const StyledBlockquoteOL = styled.ol`
  list-style: none;
  margin: 0;
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
  margin: 0 -${GUTTER_WIDTH};
  padding: 0;

  @media (min-width: ${BREAKPOINTS.SM}) {
    flex-direction: row;
  }
`;

const StyledLogoLI = styled.li`
  flex: 1;
  margin: 0 0 ${LINE_HEIGHT.BASE};
  padding: 0 ${GUTTER_WIDTH};
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

const Testimonials = ({ testimonials }) => {
  if (testimonials) {
    return (
      <StyledTestimonials>
        <div>
          <StyledBlockquoteOL>
            {testimonials.map((testimonial, i) => {
              const { 
                quote, 
                author,
                hasSmallPrint,
              } = testimonial.blockquote;
              const smallPrint = hasSmallPrint 
                ? {
                  label: '1',
                  content: 'This referee was formerly employed at this role.',
                }
                : {};

              return ( 
                <StyledBlockquoteLI key={`testimonial-quote-${i}`} style={testimonial.active && { display: 'block'}}>
                  <Blockquote quote={quote} author={author} smallPrint={smallPrint} />
                </StyledBlockquoteLI>
              );
            })}
          </StyledBlockquoteOL>
        </div>
        <div>
          <StyledLogoOL>
            {testimonials.map((testimonial, i) => {
              const { 
                alt,
                src
              } = testimonial.logo;

              return (
                <StyledLogoLI key={`testimonial-logo-${i}`} style={testimonial.active && { display: 'block'}}>
                  <StyledLogoButton active={testimonial.active}>
                    <StyledLogoButtonImg alt={alt} src={src} />
                    <StyledLogoButtonLink>View testimonial</StyledLogoButtonLink>
                  </StyledLogoButton>
                </StyledLogoLI>
              );
            })}
          </StyledLogoOL>
        </div>
      </StyledTestimonials>
    );
  }
};

Testimonials.propTypes = {
  testimonials: arrayOf(shape({
    blockquote: shape({
      quote: string.isRequired,
      author: string,
      hasSmallPrint: bool,
    }),
    logo: arrayOf({
      src: string.isRequired,
      alt: string.isRequired,
    }),
    active: bool,
  })),
};

Testimonials.defaultProps = {
  testimonials: [],
};

export default Testimonials;
