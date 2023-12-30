import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/nav/Navigation';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import './styles/main.css';
import Gallery from './pages/Gallery';
import Portraits from './pages/Portraits';
import ErfanPhotos from './pages/ErfanPhotos';
import AllaPhotos from './pages/AllaPhotos';
import Architecture from './pages/Architecture';
import ArchitecturePhotos from './pages/ArcitecturePhotos';
import StreetPhotography from './components/street_photography_section/StreetPhotography';
import StreetArchitecture from './pages/StreetArchitecture';
import BerlinStreet from './pages/BerlinStreet';
import KristinaPhotos from './pages/KristinaPhotos';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/portraits" element={<Portraits />} />
          <Route path="/gallery/architecture" element={<Architecture />} />
          <Route
            path="/gallery/streetphotography"
            element={<StreetArchitecture />}
          />

          <Route
            path="/gallery/architecture/berlin"
            element={<ArchitecturePhotos />}
          />
          <Route path="/gallery/portraits/erfan" element={<ErfanPhotos />} />
          <Route path="/gallery/portraits/alla" element={<AllaPhotos />} />
          <Route
            path="/gallery/portraits/kristina"
            element={<KristinaPhotos />}
          />
          <Route
            path="/gallery/streetphotography/berlin"
            element={<BerlinStreet />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
