import './App.css';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import LoginForm from './pages/login';
import RegisterForm from './pages/register';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
      </Router>  
    </div>
  );
}

export default App;
