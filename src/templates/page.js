import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Spacer from '../components/Spacer';
import Content, { HTMLContent } from '../components/Content';

const StyledPageHeader = styled.div`
  padding-top: 120px;
`;

export const PageTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <>
      {helmet || ''}
      <section className="section">
        <StyledPageHeader>
          <Container>
            <Heading level={1}>{title}</Heading>
          </Container>
        </StyledPageHeader>
        <Container>
          <article>
            <PostContent content={content} />
          </article>
        </Container>
      </section>
      <Spacer spacing="13" />
    </>
  )
}

PageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Page = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Tianxia Academy Fellowship">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Page;

export const pageQuery = graphql`
  query PageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
