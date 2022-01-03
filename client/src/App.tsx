import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';
import About from './components/About'
import NavBar from './components/NavBar';

const App = () => {
    return (
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/explore" element={<Explore/>}/>
          </Routes>
        </Router>
    )
}

export default App;