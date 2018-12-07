import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Menu from './components/Menu'
import Item from './components/Item'
import ProtectedRoute from './components/ProtectedRoute'
// import logo from './logo.svg';
// import './App.css';

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/menu" component={Menu} />
      <ProtectedRoute exact path="/menus/:id" component={Item} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
//  }

export default App;