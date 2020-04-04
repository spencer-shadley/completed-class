import PropTypes from 'prop-types';
import React from 'react';

// The Math function component accepts a props argument
function Math(props) {
  let result;

  // Assign value based on the operator
  switch (props.operator) {
    case '+':
      result = props.num1 + props.num2;
      break;
    case '-':
      result = props.num1 - props.num2;
      break;
    case '*':
      result = props.num1 * props.num2;
      break;
    case '/':
      result = props.num1 / props.num2;
      break;
    default:
      result = NaN;
  }

  // Return a span element containing the calculated value
  // Set the fontSize to the value in pixels
  return <span style={{ fontSize: result }}>{result}</span>;
}

Math.propTypes = {
  children: PropTypes.node,
  num1: PropTypes.number,
  num2: PropTypes.number,
  operator: PropTypes.string
};

export default Math;
