import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import ProjectsPage from './components/Pages/ProjectsPage';
import ContactPage from './components/Pages/ContactPage';
import NoPage from './components/Pages/NoPage';
import ThemeProvider from './components/Contexts/ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='projects' element={<ProjectsPage />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
