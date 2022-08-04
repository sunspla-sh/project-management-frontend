
import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Homepage';

import ProjectListPage from './pages/ProjectListPage';

import Navbar from './components/Navbar';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import EditProjectPage from './pages/EditProjectPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path="/login" element={ <IsAnon><LoginPage /></IsAnon>} />
        <Route path='/signup' element={ <IsAnon><SignupPage /></IsAnon>} />
        <Route path='projects' element={<IsPrivate><ProjectListPage /></IsPrivate>} />
        <Route path="/projects/:projectId" element={<IsPrivate><ProjectDetailsPage /></IsPrivate>} />
        <Route path="/projects/edit/:projectId" element={ <IsPrivate><EditProjectPage /></IsPrivate> } />
      </Routes>
    </div>
  );
}

export default App;
