import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
    
ReactDOM.render(
    
        <div id="app">
            <Primeiro></Primeiro>
            <ComParametro
                titulo="Nota do Aluno"
                aluno="Daniel"
                nota={10}>
            </ComParametro>
            <ComParametro
                titulo="Nota do Aluno"
                aluno="Cristiano"
                nota={6}>
            </ComParametro>
        </div>,
        document.getElementById('root')
    )
