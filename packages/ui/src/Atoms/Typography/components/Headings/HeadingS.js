import React from 'react';
import PropTypes from 'prop-types';
import DynamicComponent from '../../DynamicComponent';

const HeadingS = ({ children, ...props }) => (
  <DynamicComponent
    fontSize="small"
    fontWeight="700"
    lineHeight="small"
    {...props}
  >
    {children}
  </DynamicComponent>
);

HeadingS.propTypes = {
  tag: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HeadingS;
