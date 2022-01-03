import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ViewProjectsController from './components/ViewProjectsController';

const App = () => {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<ViewProjectsController/>}/>
          </Routes>
        </Router>
    )
}

export default App;