import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom' 
import Home  from './components/Pages/Home';
import Navbar from './components/navbar/Navbar';
 


function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route  exact path='/Home' component={Home}/>
        </Switch>
      </Router>
    </div>
    </>
  )
}
export default App
