import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
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
  about,
  whatWeOffer,
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
  about: PropTypes.object,
  whatWeOffer: PropTypes.object,
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
      }
    }
  }
`
