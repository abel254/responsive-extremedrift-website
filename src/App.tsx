import React from 'react';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Drifters } from './Components/Drifters';
import { Games } from './Components/Games';
import { Header } from './Components/Header';
import { TheProcess } from './Components/TheProcess';


function App() {
  return (
    <div className="App">
     <Header />
     <TheProcess />
     <About />
     <Drifters />
     <Games />
     <Contact />
    </div>
  );
}

export default App;
