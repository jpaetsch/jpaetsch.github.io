import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import NoPage from './components/NoPage';
import ThemeProvider from './components/Contexts/ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='projects' element={<Projects />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
