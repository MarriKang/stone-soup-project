import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
    return (
         <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
    )
}

export default App;