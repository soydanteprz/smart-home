import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar from './components/NavBar';
import  Home  from './components/Home';
import  Room  from './components/Room';
import  BedRoom  from './components/BedRoom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/bedroom" element={<BedRoom />} />
      </Routes>
    </Router>
  );
}