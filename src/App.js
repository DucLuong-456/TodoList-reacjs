import './App.css';
import React, {frameElement} from 'react';
import Header from './components/Header'
import Todos from './components/Todo'

function App() {
  return (
     <frameElement>
        <Header/>
        <Todos/>
     </frameElement>
    );
}

export default App;
