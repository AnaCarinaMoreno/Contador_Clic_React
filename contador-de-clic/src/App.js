import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import {useState} from 'react';

function App() {
  const [numClic, setNumClics] = useState(0);


  const manejarClick = () => {    
    setNumClics(numClic + 1);
  };

  const reinciarContador = () => {
    setNumClics(0);          
  };
          
  return (
    <div className='App'>
      <di className= 'contenedor-principal'>
        <h1>Contador de Click</h1>
        <Contador   numClic={numClic} />
        <Boton 
          texto='Click'
          esBotonDeClic={true}
          manejarClick = {manejarClick} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClick = {reinciarContador} />
         
      </di>
      
    </div>
  );
}

export default App;
