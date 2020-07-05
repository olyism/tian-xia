import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Hero from '../components/Hero';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Typography from '../components/Typography';
import Callout from '../components/Callout';
import Testimonials from '../components/Testimonials';
import { 
  FONT_SIZE,
  FONT_STACK,
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
  testimonials
}) => (
  <>
    <section id="home">
      <Hero 
        heading={hero.heading} 
        subheading={hero.subheading} 
        backgroundImage={hero.image}
      />
    </section>
    <section id="about-us">
      <StyledContent>
        <Heading>{about.title}</Heading>
        <Typography dangerouslySetInnerHTML={{ __html: about.body }} />
      </StyledContent>
    </section>
    <Divider />
    <section id="what-we-offer">
      <StyledContent>
        <Heading>{whatWeOffer.title}</Heading>
        <Typography dangerouslySetInnerHTML={{ __html: whatWeOffer.body }} />
        <Callout />
      </StyledContent>
    </section>
    {testimonials && 
      <>
        <Divider />
        <section id="testimonials">
          <Container>
            <StyledHeading>Our partners</StyledHeading>
            <Testimonials testimonials={testimonials} />
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
  testimonials: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
console.log(frontmatter);
  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        hero={frontmatter.hero}
        about={frontmatter.about}
        whatWeOffer={frontmatter.whatWeOffer}
        testimonials={frontmatter.testimonials}
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
          image
        }
        about {
          title
          body
        }
        whatWeOffer {
          title
          body
        }
        testimonials {
          partnerName
          logo
          quotes {
            quote
            author
            isPreviouslyEmployed
          }
        }
      }
    }
  }
`
