import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import fetchData from './generators';

function row(sale, index) {
  return (
    <tr key={index}>
      <td>{sale.orderDate}</td>
      <td>{sale.deliveryCountry}</td>
      <td>{sale.manufacturer}</td>
      <td>{sale.gender}</td>
      <td>{sale.size}</td>
      <td>{sale.colour}</td>
      <td>{sale.style}</td>
    </tr>
  );
}

class Body extends React.Component {

  componentDidMount() {
    fetchData(this.props.dispatch);
  }

  render() {
    const { sales } = this.props;

    return (
      <tbody>
        {sales.map(row)}
      </tbody>
    );
  }
}

Body.propTypes = {
  sales: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state)(Body);
