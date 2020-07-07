import React from 'react';
import styled from 'styled-components';
import { 
  arrayOf,
  bool,
  number,
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
    {assets.map((asset, index) => (
      <Logo
        partnerName={asset.partnerName}
        logo={asset.logo}
        key={`logo-${index}`}
        index={index}
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
    index: number.isRequired,
  })),
};

Logos.defaultProps = {
  assets: [],
};

export default Logos;
