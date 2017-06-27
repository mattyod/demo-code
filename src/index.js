import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Trends from './trends';
import TableBody from './tablebody';
import { SET_FILTER } from './actions';

const handleClick = (event) => {
  store.dispatch({
    type: SET_FILTER,
    sortBy: event.target.id,
  });
};

function Sortable({ id, label }) {
  return (
    <th>
      <input
        id={id}
        name="filter"
        type="radio"
        onClick={handleClick}
      />
      <label
        htmlFor={id}
        style={{
          paddingLeft: '6px',
          cursor: 'pointer',
        }}
      >
        {label}
      </label>
    </th>
  );
}

Sortable.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

ReactDOM.render((
  <Provider store={store}>
    <div style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <table style={{ width: '1080px', textAlign: 'left', fontFamily: 'monospace' }}>
        <thead>
          <tr>
            <Sortable id="orderDate" label={'Order Date'} />
            <th>Delivery Country</th>
            <Sortable id="manufacturer" label={'Manufacturer'} />
            <Sortable id="gender" label={'Gender'} />
            <Sortable id="size" label={'Size'} />
            <Sortable id="colour" label={'Colour'} />
            <Sortable id="style" label={'Style'} />
          </tr>
        </thead>
        <TableBody />
      </table>
      <Trends />
    </div>
  </Provider>
), document.getElementById('app'));
