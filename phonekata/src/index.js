let React = require('react');
let ReactDOM = require('react-dom');
let ReactRouterDom = require('react-router-dom');
let Router = ReactRouterDom.BrowserRouter;
let Switch = ReactRouterDom.Switch;
let Route = ReactRouterDom.Route;
let css = require('./index.css');
let Homepage = require('./component/homepage').default;
let NewEntry = require('./component/newEntry').default;
let EditEntry = require('./component/editEntry').default;
let reportWebVitals = require('./reportWebVitals').default;

console.log(ReactDOM)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/edit_entry">
          <EditEntry />
        </Route>
        <Route path="/new_entry">
          <NewEntry />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
