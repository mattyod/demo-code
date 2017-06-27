const tape = require('tape');
const reducer = require('./reducer');
const {
  RECEIVED_DATA,
  SET_FILTER,
} = require('./actions');

const payload = require('../static/data');
const unsortedStore = require('../fixtures/unsorted');
const orderDateSortedStore = require('../fixtures/sorted-by-order-date');
const manufacturerSortedStore = require('../fixtures/sorted-by-manufacturer');
const genderSortedStore = require('../fixtures/sorted-by-gender');
const sizeSortedStore = require('../fixtures/sorted-by-size');
const colourSortedStore = require('../fixtures/sorted-by-colour');
const styleSortedStore = require('../fixtures/sorted-by-style');

tape('reducer sets initial state on RECEIVED_DATA action', (test) => {
  const state = {};
  const action = {
    type: RECEIVED_DATA,
    payload,
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

tape('reducer sorts by orderDate', (test) => {
  const state = unsortedStore;
  const action = {
    type: SET_FILTER,
    sortBy: 'orderDate',
  };

  const expected = orderDateSortedStore;
  const actual = reducer.default(state, action);

  test.plan(1);
  test.same(actual, expected);
});

tape('reducer sorts by manufacturer', (test) => {
  const state = unsortedStore;
  const action = {
    type: SET_FILTER,
    sortBy: 'manufacturer',
  };

  const expected = manufacturerSortedStore;
  const actual = reducer.default(state, action);

  test.plan(1);
  test.same(actual, expected);
});

tape('reducer sorts by gender', (test) => {
  const state = unsortedStore;
  const action = {
    type: SET_FILTER,
    sortBy: 'gender',
  };

  const expected = genderSortedStore;
  const actual = reducer.default(state, action);

  test.plan(1);
  test.same(actual, expected);
});

tape('reducer sorts by size', (test) => {
  const state = unsortedStore;
  const action = {
    type: SET_FILTER,
    sortBy: 'size',
  };

  const expected = sizeSortedStore;
  const actual = reducer.default(state, action);

  test.plan(1);
  test.same(actual, expected);
});

tape('reducer sorts by colour', (test) => {
  const state = unsortedStore;
  const action = {
    type: SET_FILTER,
    sortBy: 'colour',
  };

  const expected = colourSortedStore;
  const actual = reducer.default(state, action);

  test.plan(1);
  test.same(actual, expected);
});

tape('reducer sorts by style', (test) => {
  const state = unsortedStore;
  const action = {
    type: SET_FILTER,
    sortBy: 'style',
  };

  const expected = styleSortedStore;
  const actual = reducer.default(state, action);

  test.plan(1);
  test.same(actual, expected);
});
