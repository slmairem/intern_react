import './App.css';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import LoginForm from './pages/login';
import RegisterForm from './pages/register';
import Details from './pages/detail';
import Lists from './pages/lists';
import Forum from './pages/forum';
import News from './pages/news';
import Animation from './pages/animation';
import Profile from './pages/profile';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import TransitionWrapper from './transitionWrapper';

function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation(); // useLocation is now within Router context

  return (
    <>
      <Navbar />
      <TransitionWrapper location={location}>
        <Routes location={location}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/detail/:name" element={<Details />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </TransitionWrapper>
    </>
  );
}

export default App;
