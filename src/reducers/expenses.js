//expense reducer
const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(( { id }) => {
                return id !== action.id;
            })
        case 'EDIT_EXPENSE'
            return state;
    }