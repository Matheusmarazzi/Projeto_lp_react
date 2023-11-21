
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Edit from './Pages/Edit'
import Form from './Pages/Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/Add' element={<Form/>}/>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App
