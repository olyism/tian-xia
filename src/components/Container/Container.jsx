import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';
import styles from './Container.module.scss';

const Container = ({ children }) => (
  <div className={styles.Container}>
    {children}
  </div>
);

Container.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node
  ]).isRequired,
};

export default Container;
