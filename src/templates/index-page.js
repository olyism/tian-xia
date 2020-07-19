import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Hero from '../components/Hero';
import Heading from '../components/Heading';
import Typography from '../components/Typography';
import Callout from '../components/Callout';
import Logos from '../components/Logos';
import {
  GUTTER_WIDTH,
  SPACING
} from '../constants/theme.js';

const StyledContent = styled.article`
  margin: ${SPACING['13']} auto;
  max-width: 610px;
  padding-left: ${GUTTER_WIDTH};
  padding-right: ${GUTTER_WIDTH};
`;

const StyledHeading = styled(Heading)`
  margin: ${SPACING['13']} auto ${SPACING['5']};
  max-width: 610px;
`;

export const IndexPageTemplate = ({
  title,
  hero,
  about,
  whatWeOffer,
  partners
}) => (
  <>
    <section id="home">
      <Hero 
        heading={hero.heading} 
        subheading={hero.subheading} 
        backgroundImage={hero.image.publicURL}
      />
    </section>
    <section id="about-us">
      <StyledContent>
        <Heading>{about.title}</Heading>
        <Typography>
          <ReactMarkdown source={about.body} />
        </Typography>
      </StyledContent>
    </section>
    <Divider />
    <section id="what-we-offer">
      <StyledContent>
        <Heading>{whatWeOffer.title}</Heading>
        <Typography>
          <ReactMarkdown source={whatWeOffer.body} />
        </Typography>
        <Callout />
      </StyledContent>
    </section>
    {partners.testimonials && 
      <>
        <Divider />
        <section id="testimonials">
          <Container>
            {partners.title && <StyledHeading>{partners.title}</StyledHeading>}
            <Logos assets={partners.testimonials} />
          </Container>
        </section>
      </>
    }
  </>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.object,
  about: PropTypes.object,
  whatWeOffer: PropTypes.object,
  partners: PropTypes.object,
  fellows: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout data={{fellows: frontmatter.fellows}}>
      <IndexPageTemplate
        title={frontmatter.title}
        hero={frontmatter.hero}
        about={frontmatter.about}
        whatWeOffer={frontmatter.whatWeOffer}
        partners={frontmatter.partners}
        fellows={frontmatter.fellows}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        hero {
          heading
          subheading
          image {
            extension
            publicURL
          }
        }
        about {
          title
          body
        }
        whatWeOffer {
          title
          body
        }
        partners {
          title
          testimonials {
            partnerName
            logo {
              extension
              publicURL
            }
            quotes {
              quote
              author
              isPreviouslyEmployed
            }
          }
        }
        fellows {
          title
          testimonials {
            quote
            author
          }
        }
      }
    }
  }
`
