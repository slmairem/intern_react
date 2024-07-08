import './App.css';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import LoginForm from './pages/login';
import RegisterForm from './pages/register';
import SearchResults from './pages/search';
import UserProfile from './pages/profile';
import Details from './pages/detail';
import Lists from './pages/lists';
import Forum from './pages/forum';
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
            <Route path="/search" element={<SearchResults />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/detail" element={<Details />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
      </Router>  
    </div>
  );
}

export default App;
