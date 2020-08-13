import React from 'react';
import Container from '../components/Container';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import Spacer from '../components/Spacer';
import Typography from '../components/Typography';
import { EMAIL } from '../constants/settings';

const NotFoundPage = () => (
  <Layout>
    <PageHeader title="Page not found" />
    <section>
      <Container>
        <article>
          <Typography>
            <p>We can not find the page you're looking for. Please check the web address you've entered or <a href={`mailto:${EMAIL}`}>contact us</a> for assistance.</p>
          </Typography>
        </article>
      </Container>
      <Spacer spacing="34" />
    </section>
  </Layout>
);

export default NotFoundPage;
