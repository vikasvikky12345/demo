import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import Signup from './Signup';
export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <p>iam vikas</p>
      <Router>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}
