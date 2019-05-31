import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component!
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense page!
    </div>
)

const EditPage = () => (
    <div>
        This is the edit page!
    </div>
)

const HelpPage = () => (
    <div>
        This is the help page!
    </div>
)

const routes = (
    <BrowserRouter> 
        <div>
        <Route path="/" component={ExpenseDashboardPage}  exact={true}/>
        <Route path="/create" component={AddExpensePage} exact={true}/> 
        <Route path="/edit" component={EditPage} exact={true}/> 
        <Route path="/help" component={HelpPage} exact={true}/> 
        </div>
    </BrowserRouter>

);

ReactDOM.render(routes, document.getElementById('root'));
