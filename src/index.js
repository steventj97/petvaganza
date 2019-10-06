import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter} from 'react-router-dom'
import './index.css';
// import App from './App';
import home from './routes/home'
import main from './routes/main'
import intro from './routes/intro'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div >
            <Route path="/" exact component={ main }/>
            <Route path="/intro" exact component={ intro }/>
            <Route path="/home" exact component={ home }/>
        </div>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
