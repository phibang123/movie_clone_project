import './App.css';

import { Route, Router, Switch } from 'react-router';
import { Suspense, lazy } from 'react';

import Checkout from './Pages/Checkout/Checkout';
import  CheckoutTemplate  from './Templates/CheckoutTemplate/CheckoutTemplate';
import Contact from './Pages/Contact/Contact';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home';
import  HomeTemplate  from './Templates/HomeTemplate/HomeTemplate';
import Login from './Pages/Login/Login';
import News from './Pages/News/News';
import Register from './Pages/Register/Register';
import UserTemplate from './Templates/UserTemplate/UserTemplate';
import { createBrowserHistory } from 'history'

const CheckoutTemplateLazy = lazy(() => import ("./Templates/CheckoutTemplate/CheckoutTemplate"))
export const history = createBrowserHistory();
function App()
{
  
  return (
    <Router history={history}>
      <Switch>
        
        <HomeTemplate path="/contact" exact  Component={Contact}></HomeTemplate>
        <HomeTemplate path="/home" exact  Component={Home}></HomeTemplate>
        
        <HomeTemplate path="/news" exact Component={News}></HomeTemplate>
        <HomeTemplate path="/detail/:id" exact Component={Detail}></HomeTemplate>
        <UserTemplate path="/login" exact  Component={Login}></UserTemplate>
        {/* <Route path="/login" exact Component={Login}></Route>
        <Route path="/register" exact Component={Register}></Route> */}

        <Suspense fallback={<h1>LOADING....</h1>}>
          <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout}></CheckoutTemplateLazy>
          <HomeTemplate path="/" exact  Component={Home}></HomeTemplate>
        </Suspense>
        
        
 

       
       </Switch>
    </Router>
  );
}

export default App;
