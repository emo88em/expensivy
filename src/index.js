import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter} from './actions/filters';
import getVisibileExpenses from './selectors/expenses';


const store = configureStore();

store.dispatch(addExpense({description: 'water bill'}));
store.dispatch(addExpense({description: 'gas bill'}));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('root'));
