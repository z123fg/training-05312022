import React from 'react';
import { connect } from 'react-redux';

const Calculator = (props) => (
  <div className="CalculatorWrapper">
    Test content
  </div>
);

Calculator.propTypes = {
  // bla: PropTypes.string,
};

Calculator.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculator);
