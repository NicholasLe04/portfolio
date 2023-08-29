import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';

import './App.css';
import Landing from './components/pages/Landing';
import Links from './components/pages/Links';
import SkillsAndInterests from './components/pages/SkillAndInterests';
import Projects from './components/pages/Projects';
import Random from './components/pages/Random';

function Root() {
  const navigate = useNavigate();

  return (
    <div className="Root">
      <p id="title" onClick={() => navigate("/")}>NicholasLe</p>
      <a href="https://github.com/NicholasLe04/portfolio"><img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" height="75px" width="75px"/></a>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/skills-and-interests" element={<SkillsAndInterests />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/links" element={<Links />} />
        <Route path="/fun" element={<Random />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Root/>
    </BrowserRouter>
  );
}

export default App;
