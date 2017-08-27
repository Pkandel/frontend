import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField } from '../generic';
import './word.scss';

class Word extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      error: '',
      warning: '',
      loading: false,
      showResult: false
    };
  }

  componentWillReceiveProps = (nextProps) => {
    const { pending } = nextProps;
    this.setState({
      loading: pending
    });
  };

  // this is onchange validation
  validateWord = (value) => {
    const patt = /\d+/g;
    const isNumber = patt.test(value);
    if (value.length > 0 && isNumber) {
      this.setState({ warning: '', error: 'please type a word' });
      return false;
    }
    this.setState({ error: '', warning: '' });
    return true;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    if (this.validateWord(value)) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { word } = this.state;
    const { findWord } = this.props;
    // this is validating only when the form is submit
    if (word.length === 0) {
      this.setState({ warning: 'Please type some word' });
      return false;
    }
    if (word !== '' && word.length > 0) {
      this.setState({ error: '', loading: true, showResult: true });
      findWord(word);
    }
  };

  render() {
    const { word, error, warning, loading, showResult } = this.state;
    const { searchResult, errorResult } = this.props;
    const loader = loading ? <div className='find-word-loader' /> : <i className='material-icons'>search</i>;
    const label = loading ? '' : 'find word';
    let isFeedback = error !== '' ? { error: error } : {};
    isFeedback = warning !== '' ? { warning: warning } : { ...isFeedback };

    const searchResults = () => {
      if (showResult) {
        if (loading) {
          return <h2> Searching <img src='/images/three-dots.svg' style={{ fill: 'lightgrey', width: 60, height: 15 }} /> </h2>;
        } else if (errorResult) {
          return <div className='word-finder-result'> Something went wrong </div>;
        } else if (searchResult.length > 0) {
          return (<div className='word-finder-result'>
            Here are the results
            <div className='word-finder-result-container'>
              {searchResult.map((word, index) => {
                return <li key={index}>{word}</li>;
              })}
            </div>
          </div>);
        } else if (searchResult.length === 0) {
          return <div className='word-finder-result'> Sry no results found in the dictionary </div>;
        }
      } else {
        return null;
      }
    };

    return (
      <div className='word-finder'>
        {/* <pre>{JSON.stringify(this.state, null, 4)}</pre> */}
        <form onSubmit={this.handleSubmit}>
          <TextField
            type='text'
            name='word'
            value={word}
            placeholder='Type your random word'
            onChange={this.handleChange}
            {...isFeedback}
          />
          <div className='word-finder-submit'>
            <MuiThemeProvider>
              <RaisedButton
                label={label}
                labelPosition='before'
                icon={loader}
                type='submit'
                disabled={loading}
              />
            </MuiThemeProvider>
          </div>
          {searchResults()}
        </form>

      </div>
    );
  }
}

Word.propTypes = {
  searchResult: PropTypes.array.isRequired,
  errorResult: PropTypes.string,
  pending: PropTypes.bool,
  findWord: PropTypes.func.isRequired

};

export default Word;
