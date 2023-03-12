import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {fas} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas)

function App() {
  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path='/'>

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
