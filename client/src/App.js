import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Chatpage from './pages/Chatpage/Chatpage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/chat' element={<Chatpage/>} /> 
      </Routes>
      
    </div>
  );
}

export default App;
