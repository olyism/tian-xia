import React from 'react';
import {
  arrayOf,
  shape,
  string
} from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import TypographyStyles from './TypographyStyles';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { CONTEXTUAL_COLOR } from '../../constants/theme';
import useSiteMetadata from '../SiteMetadata';

const ResetStyles = createGlobalStyle`
  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  img {
    border-style: none;
  }

  a {
    color: ${CONTEXTUAL_COLOR.LINK.LINK};
  }
`;

const TemplateWrapper = ({ data, children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <ResetStyles />
      <TypographyStyles />
      <Navbar />
      <main>{children}</main>
      <Footer {...data} />
    </>
  )
}

TemplateWrapper.propTypes = {
  data: shape({
    fellows: shape({
      title: string,
      testimonials: arrayOf(shape({
        quote: string,
        author: string,
      })),
    }),
  }),
};

export default TemplateWrapper
