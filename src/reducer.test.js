const tape = require('tape');
const reducer = require('./reducer');
const actions = require('./actions');

tape('reducer sets initial state on RECEIVED_DATA action', (test) => {
  const state = {};
  const action = {
    type: actions.RECEIVED_DATA,
    payload: [{}],
  };

  const expected = {
    sales: action.payload,
    grouped: {},
    sortBy: '',
  };
  const actual = reducer.default(state, action);

  test.plan(1);
  test.same(actual, expected);
});
