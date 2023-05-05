import './App.css';
import MainPage from './mainPageLayout/mainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './loginAndRegist/Auth';
import Landing from './landing/landing';
import AuthContextProvider, { AuthContext } from './contexts/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Auth authRoute='login' />} />
          <Route exact path="/register" element={<Auth authRoute='register' />} />
        </Routes>
      </Router>
      </AuthContextProvider>
    </>
  )
}

export default App;
