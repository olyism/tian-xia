import React from 'react';
import styled from 'styled-components';
import { 
  arrayOf,
  bool,
  shape,
  string
} from 'prop-types';
import { BREAKPOINTS, SPACING } from '../../constants/theme.js';
import Logo from './Logo';

const StyledLogos = styled.ol`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 auto ${SPACING['13']};
  padding: 0;

  @media (min-width: ${BREAKPOINTS.SM}) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Logos = ({ assets }) => assets && (
  <StyledLogos>
    {assets.map((asset, i) => (
      <Logo
        partnerName={asset.partnerName}
        quotes={asset.quotes}
        logo={asset.logo}
        key={`logo-${i}`}
        i={i}
      />
    ))}
  </StyledLogos>
);

Logos.propTypes = {
  assets: arrayOf(shape({
    quotes: arrayOf(shape({
      quote: string.isRequired,
      author: string.isRequired,
      isPreviouslyEmployed: bool.isRequired,
    })),
    logo: string.isRequired,
    partnerName: string.isRequired,
  })),
};

Logos.defaultProps = {
  assets: [],
};

export default Logos;
