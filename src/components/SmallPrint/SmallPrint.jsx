import React from 'react';
import { string } from 'prop-types';

const SmallPrint = ({ label, content }) => {
  return label && content && (
    <span>
      <button>{label}</button>
      <aside>
        {content}
      </aside>
    </span>
  );
};

SmallPrint.propTypes = {
  label: string,
  content: string,
};

SmallPrint.defaultProps = {
  label: '',
  content: '',
};

export default SmallPrint;
