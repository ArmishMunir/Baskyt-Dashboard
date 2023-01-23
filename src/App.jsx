import './App.css'
import Nav from './components/Navbar/Nav'
import Home from './components/Home/Home'
import Tqm from './components/TQM/Tqm'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tqm" element={<Tqm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
