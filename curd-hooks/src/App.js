import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Edit from './components/Edit';


export default function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Add/>} />
            <Route path='/edit' element={<Edit/>} />
        </Routes>
      </Router>
    </div>
  );
}

