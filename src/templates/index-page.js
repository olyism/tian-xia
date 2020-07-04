import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Divider from '../components/Divider';
import Hero from '../components/Hero';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Callout from '../components/Callout';
import Testimonials from '../components/Testimonials';
import { 
  FONT_SIZE,
  FONT_STACK,
  GUTTER_WIDTH,
  SPACING
} from '../constants/theme.js';
import logo_foundersPledge from '../img/logo-founders-pledge.svg';
import logo_80000hours from '../img/logo-80000hours.svg';
import logo_oxford from '../img/logo-oxford.png';

const StyledContent = styled.article`
  margin: ${SPACING['13']} auto;
  max-width: 610px;
  padding-left: ${GUTTER_WIDTH};
  padding-right: ${GUTTER_WIDTH};
`;

const StyledUL = styled.ul`
  font-family: ${FONT_STACK.SERIF};
  font-size: ${FONT_SIZE.TEXT};
  line-height: 24px;
`;

const StyledLI = styled.li`
  margin-bottom: ${SPACING['2']};
`;

const testimonialsData = [
  {
      blockquote: {
        quote: 'The fellows are a highly intelligent, sociable and engaged group at the start of their careers, and are mainly focused on long-term issues. I think engaging with us helped them get a sense of how people are thinking about some of the key problem areas; the fellowship has also yielded some concrete benefits for Founders Pledge, as one of the fellows has put us in touch with a high profile entrepreneur working on improving science.',
        author: 'John Halstead, Head of Applied Research, Founders Pledge',
        hasSmallPrint: true,
      },
      logo: {
        src: logo_foundersPledge,
        alt: 'Founders Pledge',
      },
      active: true,
  },
  {
    blockquote: {
      quote: 'I was impressed by the Tianxia Fellowship programme, and would support its continuation in the coming years. The fellows who were selected were a promising cohort - from a diverse range of backgrounds, but all explicitly value aligned and very committed to steering their future careers for doing the most good. I was particularly struck by their curiosity and eagerness to learn, and certainly got the impression that the Tianxia fellowship was a pivotal experience for several of them in terms of getting their first dose of thorough exposure to the cause areas, organisations, and general concepts involved in long-term thinking.',
      author: 'Jade Leung, Head of Research and Partnerships, Center for the Governance of AI, University of Oxford',
    },
    logo: {
      src: logo_oxford,
      alt: 'Future of Humanity Institute — University of Oxford',
    },
},
{
  blockquote: {
    quote: `At 80,000 Hours, we were impressed by the calibre of the Tianxia Fellows and the diversity of their backgrounds. We'd be keen to stay involved in future years.`,
    author: 'Benjamin Todd, CEO and co-founder, 80,000 Hours',
  },
  logo: {
    src: logo_80000hours,
    alt: '80,000 Hours',
  },
},
];

export const IndexPageTemplate = ({
  title,
  hero,
  mainpitch,
  description,
  intro,
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
        <Heading>About us</Heading>
        <Paragraph>The world faces ever more complex and critical challenges. In an era of global interdependence, peoples, nations, and cultures must come together to rise above their common hurdles. “Tianxia (天下) ” is a Chinese term expressing the idea of a universal civilizational order under which life on Earth may flourish. Inspired by this ancient concept, the Tianxia Academy believes in empowering the future leaders and thinkers to contribute towards an equitable and harmonious future.</Paragraph>
        <Paragraph>The Fellowship aims to cultivate leaders dedicated to improving the long-term future through macro-strategic work. This type of work targets areas that hold great transformative potential on the timescale of decades yet are being neglected by current mainstream efforts.</Paragraph>
      </StyledContent>
    </section>
    <Divider />
    <section id="what-we-offer">
      <StyledContent>
        <Heading>What we offer</Heading>
        <Paragraph>We support students and early-career professionals who are:</Paragraph>
        <StyledUL>
          <StyledLI>Dedicated to accomplishing global humanitarian outcomes for the long-term future</StyledLI>
          <StyledLI>Culturally aware, reflective, and entrepreneurial</StyledLI>
          <StyledLI>Fluent in English and at least conversational in Mandarin Chinese</StyledLI>
        </StyledUL>
        <Paragraph>The program scales up participants’ capabilities for improving the world and provides a lifelong network for mentorship and collaborations.</Paragraph>
        <Callout />
      </StyledContent>
    </section>
    { testimonialsData && 
      <>
        <Divider />
        <section id="testimonials">
          <StyledContent>
            <Heading>Our partners</Heading>
            <Testimonials testimonials={testimonialsData} />
          </StyledContent>
        </section>
      </>
    }
  </>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.object,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        hero={frontmatter.hero}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
