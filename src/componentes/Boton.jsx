import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props){
    const esOperador = (valor) => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };
    const botonClase = 'boton-contenedor' + (esOperador(props.children) ? ' operador' : '');
    
    return (
        <button 
            className = {botonClase}
            onClick = {() => props.manejarClic(props.children)}>
                {props.children}
        </button>
    );
}

export default Boton;