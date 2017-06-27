import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Body = ({ grouped, sortBy }) => {
  function row(key) {
    return grouped[key]
      .map(group => (
        <tr>
          <td>{key}</td>
          <td>{group.country}</td>
          <td>{group.sales}</td>
        </tr>
      ))
      .concat((
        <tr style={{ height: '1px', background: '#999' }}>
          <td /><td /><td />
        </tr>
      ));
  }

  return sortBy ?
    <div>
      <h2 style={{ marginBottom: '7px' }}>{`Trends by country for ${sortBy}`}</h2>
      <table style={{ width: '480px', textAlign: 'left', fontFamily: 'monospace' }}>
        <thead>
          <tr>
            <th>{sortBy}</th>
            <th>Country</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(grouped).map(row)}
        </tbody>
      </table>
    </div> : null;
};

Body.defaultProps = {
  sortBy: '',
};

Body.propTypes = {
  grouped: PropTypes.object.isRequired,
  sortBy: PropTypes.string,
};

export default connect(({ grouped, sortBy }) => ({ grouped, sortBy }))(Body);
