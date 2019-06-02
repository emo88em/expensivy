import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component!
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense page!
    </div>
);

const EditPage = () => (
    <div>
        This is the edit page!
    </div>
);

const HelpPage = () => (
    <div>
        This is the help page edit page!
    </div>
);

const notfoundpage = () => (
    <div>
        404! Page not found! <Link to="/">Go Home</Link>
    </div>
)


const routes = (
    <BrowserRouter> 
        <Switch>
        <Route path="/" component={ExpenseDashboardPage}  exact={true}/>
        <Route path="/create" component={AddExpensePage} /> 
        <Route path="/edit" component={EditPage} /> 
        <Route path="/help" component={HelpPage} /> 
        <Route component={notfoundpage} />
        </Switch>
    </BrowserRouter>

);

ReactDOM.render(routes, document.getElementById('root'));
