import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing-page';
import ExplorePage from './pages/Explore-page';
import MarsPage from './pages/mars-pages/Mars-page';
import MoonExplore from './pages/moon-pages/moon-explore.jsx'
import OuterSpaceExplore from './pages/outerspace/outerspace-explore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/mars" element={<MarsPage />} />
        <Route path="/moon" element={<MoonExplore />} />
        <Route path="/outerspace" element={<OuterSpaceExplore />} />
      </Routes>
    </Router>
  );
}

export default App;
