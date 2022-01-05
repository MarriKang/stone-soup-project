import { render } from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';
import About from './components/About'
import NavBar from './components/NavBar';
import ViewSingleProjectController from './components/controllers/ViewSingleProjectController';
import CheckoutController from './components/controllers/CheckoutController';
import CheckoutSuccess from './components/CheckoutSuccess';
import DeleteSuccess from './components/DeleteSuccess';

const App = () => {
    return (
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/explore/:id" element={<ViewSingleProjectController/>} />
            <Route path="/projects/:id/checkout" element={<CheckoutController/>}/>
            <Route path="/checkoutsuccess" element={<CheckoutSuccess />} />
            <Route path="/deleted" element={<DeleteSuccess/>} />
          </Routes>
        </Router>
    )
}

export default App;