import './App.css';
import SignUp from './component/Singup';
import Dashboad from './pages/Dashboard';
import Homepage from './pages/Homepage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/dashboard' element={<Dashboad />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
