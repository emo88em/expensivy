import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


const addExpense = ({description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
})

const expenseReducerDefaultState = [];

//expenses
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};


const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type){
        default:
            return state
    }
};

const demoState = {
    expenses: [{
        id: 'asdasdf',
        description: 'Rent',
        note: 'Last payement of the rent',
        amount: 5400,
        createdAt: 0
}],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

};


// store creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

//be notified of changes to the store by subscribing
store.subscribe(() => {
    console.log(store.getState());
    
});

store.dispatch(addExpense({description: 'rent', amount: 100}))



ReactDOM.render(<index />, document.getElementById('root'));
