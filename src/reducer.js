import {
  RECEIVED_DATA,
  SET_FILTER,
} from './actions';

const sortObjectsByKey = (arr, key) => [...arr]
    .sort((a, b) => ((a[key] === b[key])
      ? 0
      : Number(a[key] < b[key]) || -1));

const reducer = (state, action = {}) => {
  switch (action.type) {
    case RECEIVED_DATA: {
      return Object.assign(
        {},
        {
          sales: action.payload,
          grouped: {},
          sortBy: '',
        },
      );
    }
    case SET_FILTER: {
      const { sortBy } = action;

      const sales = sortObjectsByKey(state.sales, sortBy);

      const groupedUnsorted = sales.reduce((group, sale) => {
        group[sale[sortBy]]
          = group[sale[sortBy]] || {};

        group[sale[sortBy]][sale.deliveryCountry]
          = group[sale[sortBy]][sale.deliveryCountry] + 1 || 1;

        return group;
      }, {});

      const grouped = Object.keys(groupedUnsorted)
        .reduce((obj, key) => {
          const items = Object.keys(groupedUnsorted[key])
            .reduce((arr, country) => [
              ...arr,
              {
                country,
                sales: groupedUnsorted[key][country],
              },
            ], []);

          obj[key] = sortObjectsByKey(items, 'sales');

          return obj;
        }, {});

      return Object.assign(
        {},
        state,
        {
          sales,
          grouped,
          sortBy,
        },
      );
    }
    default: {
      return state;
    }
  }
};

export default reducer;
