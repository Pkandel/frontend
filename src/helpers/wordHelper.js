import axios from 'axios';
import * as URL from 'api/api_url';

export default function findwordHelper (word) {
  return axios.get(`${URL.WORD_FINDER_BASE}${URL.WORD_FINDER}/${word}`);
}
