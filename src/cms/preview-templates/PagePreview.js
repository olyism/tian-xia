import React from 'react';
import PropTypes from 'prop-types';
import { PageTemplate } from '../../templates/page';

const PagePreview = ({ entry, widgetFor }) => {
  return (
    <PageTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
    />
  )
};

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PagePreview;
