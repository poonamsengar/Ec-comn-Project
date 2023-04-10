import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Ec.Comn...</h1>
      <BrowserRouter/>
    </div>
  );
}

export default App;
