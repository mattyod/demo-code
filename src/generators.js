import axios from 'axios';
import {
  RECEIVED_DATA,
} from './actions';

const fetchData = (dispatch) => {
  axios.get('/static/data.json')
    .then(({ data }) => {
      dispatch({
        type: RECEIVED_DATA,
        payload: data,
      });
    });
};

export default fetchData;
