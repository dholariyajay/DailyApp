import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Counter from './Counter';
import Navbar from './Navbar';
import ToDo from './ToDo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/counter" element={<Counter/>} />
        <Route path="/todo" element={<ToDo/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
