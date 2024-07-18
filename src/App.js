import './App.css';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import LoginForm from './pages/login';
import RegisterForm from './pages/register';
import SearchResults from './pages/search';
import Details from './pages/detail';
import Lists from './pages/lists';
import Forum from './pages/forum';
import News from './pages/news';
import Animation from './pages/animation';
import Profile from './pages/profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
