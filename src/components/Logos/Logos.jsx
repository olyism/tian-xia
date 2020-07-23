import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { 
  arrayOf,
  shape,
  string
} from 'prop-types';
import {
  BREAKPOINTS,
  SPACING,
} from '../../constants/theme.js';
import Logo from './Logo';

const StyledLogos = styled.ol`
  display: flex;
  flex-wrap: wrap;
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
        Modal={<Modal />}
        key={`logo-${i}`}
        i={i}
      />
    ))}
  </StyledLogos>
);

Logos.propTypes = {
  assets: arrayOf(shape({
    logo: shape({
      extension: string.isRequired,
      publicURL: string.isRequired,
    }).isRequired,
    partnerName: string.isRequired,
  })),
};

Logos.defaultProps = {
  assets: [],
};

export default Logos;
