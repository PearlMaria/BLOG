import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Add from './components/Add';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Nav/><br/><br/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Add' element={<Add/>}/>
      </Routes>
    </div>
  );
}

export default App;









