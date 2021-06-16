import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Login from './pages/Login';
import './App.scss';
import CheckInPage from './pages/CheckInPage';

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' component={Login} exact />
          <Route path='/scanner' component={CheckInPage} exact />

        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
