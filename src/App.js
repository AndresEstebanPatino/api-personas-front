import './App.css';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ShowElement from './components/ShowElement';
import  Create  from './components/Create';
import Edit from './components/Edit'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowElement />} />
            <Route path='/create' element={<Create/>} />
            <Route path='/edit/:id' element={<Edit/>}/>
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
