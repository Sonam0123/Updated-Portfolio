import './App.css';
import Home from './routes/Home';
import Project from './routes/Project';
import Contact from './routes/Contact';
import {Routes , Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
