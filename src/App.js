import './App.css';

import { Route, Router, Switch } from 'react-router';

import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import { HomeTemplate } from './Templates/HomeTemplate/HomeTemplate';
import Login from './Pages/Login/Login';
import News from './Pages/News/News';
import Register from './Pages/Register/Register';
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();
function App()
{
  
  return (
    <Router history={history}>
      <Switch>
        
        <HomeTemplate path="/contact" exact  Component={Contact}></HomeTemplate>
        <HomeTemplate path="/home" exact  Component={Home}></HomeTemplate>
        <HomeTemplate path="/news" exact Component={News}></HomeTemplate>
        <Route path="/login" exact Component={Login}></Route>
        <Route path="/register" exact Component={Register}></Route>
        <HomeTemplate path="/" exact  Component={Home}></HomeTemplate>


       
       </Switch>
    </Router>
  );
}

export default App;
