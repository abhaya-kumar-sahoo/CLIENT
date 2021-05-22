import {Route, Switch} from 'react-router-dom';
import Home from './component/home/Home'
import About from './component/About/About.'
import Contact from './component/contact/Contact';
import Logout from './component/logout/Logout'
import Login from './component/login/Login'
import Navbar from './component/navbar/Navbar'
import Signup from './component/signup/Signup'
import Error from "./component/Error/Error"

function App() {
  return (
    <div className="App"> 
  
      <Navbar/> 
      <Switch>
      <Route exact path="/">
      <Home/>
      </Route>    
        <Route path="/about">  
      <About/>
        </Route>
        <Route path="/contact"> 
        <Contact/> 
        </Route>    
          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/signup">
          <Signup/>
        </Route>    
          <Route path="/logout">   
          <Logout/>
          </Route>
          <Route>
          <Error/>
          <Logout/>
              </Route>
          </Switch>

    </div>
  ); 
}

export default App;
