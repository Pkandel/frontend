import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import findWord from 'actions/wordActions';
import {Word }  from 'components';

class WordContainer extends Component {
  render () {
    const { word, pending, error, findWord } = this.props;
    return (
      <Word
        searchResult={word}
        pending={pending}
        errorResult={error}
        findWord={findWord}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    word: state.word.word,
    pending: state.word.pending,
    error: state.word.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    findWord: bindActionCreators(findWord, dispatch)
  };
};

WordContainer.propTypes = {
  word: PropTypes.array.isRequired,
  pending: PropTypes.bool.isRequired,
  error: PropTypes.string,
  findWord: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(WordContainer);
