import './App.css';
import Logo from './componentes/Logo.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import Boton from './componentes/Boton.jsx';
import BotonClear from './componentes/BotonClear.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';

const esOperador = (valor) => {
  return isNaN(valor) && valor !== '.' && valor !== '=';
}

const ultimoOperador = (word) => {
  const regExp = /[+*/-]/g; 
  const operators = word.match(regExp);
  return operators ? word.lastIndexOf(operators[operators.length - 1]) : -1; 
}

function App() {
  const [input, setInput] = useState('');
  
  const agregarInput = (valor) => {
    if(valor === '.' && input &&
      (input[input.length - 1] === '.' || 
       input.lastIndexOf('.') > ultimoOperador(input))){
          alert("Expresión inválida.");
    }
    else if(esOperador(valor) && esOperador(input[input.length - 1])){
        alert("No es posible utilizar más de un operador.");
    }
    else{
      setInput(input + valor);
    }
  };

  const calcularResultado = () => {
    if(input)
      setInput(evaluate(input).toString());
    else
      alert("Por favor, ingresa un valor.");
  };

  return (
    <div className="App">
      <Logo nombre = 'Mapache' />
      <div className = 'contenedor-calculadora'>
        <div className = 'fila'>
          <Pantalla input = {input}/>
        </div>
        <div className = 'fila'>
          <Boton manejarClic = {agregarInput}>1</Boton>
          <Boton manejarClic = {agregarInput}>2</Boton>
          <Boton manejarClic = {agregarInput}>3</Boton>
          <Boton manejarClic = {agregarInput}>+</Boton>
        </div>
        <div className = 'fila'>
          <Boton manejarClic = {agregarInput}>4</Boton>
          <Boton manejarClic = {agregarInput}>5</Boton>
          <Boton manejarClic = {agregarInput}>6</Boton>
          <Boton manejarClic = {agregarInput}>-</Boton>
        </div>
        <div className = 'fila'>
          <Boton manejarClic = {agregarInput}>7</Boton>
          <Boton manejarClic = {agregarInput}>8</Boton>
          <Boton manejarClic = {agregarInput}>9</Boton>
          <Boton manejarClic = {agregarInput}>*</Boton>
        </div>
        <div className = 'fila'>
          <Boton manejarClic = {calcularResultado}>=</Boton>
          <Boton manejarClic = {agregarInput}>0</Boton>
          <Boton manejarClic = {agregarInput}>.</Boton>
          <Boton manejarClic = {agregarInput}>/</Boton>
        </div>
        <div className = 'fila'>
          <BotonClear manejarClear = {() => setInput('')}>
            Clear
          </BotonClear>
        </div> 
      </div>
    </div>
  );
}

export default App;
