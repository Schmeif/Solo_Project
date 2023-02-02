import './App.css';
import Main from './views/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Createteam from './components/Createteam';
import NavBar from './components/NavBar';
import Editteam from './components/Editteam';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
        <Route path='/' element={<Homepage />}/>
          <Route path='/getDigimon' element={<Main/>} />
          <Route path='/api/updateDigimon/:id' element={<Editteam/>} />
          <Route path='/api/createDigimon/' element={<Createteam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;