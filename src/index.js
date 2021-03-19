import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
    
ReactDOM.render(
    
        <div>
            <Primeiro></Primeiro>
            <ComParametro
                titulo="Nota do Aluno"
                aluno="Daniel"
                nota={10}>
            </ComParametro>
            <Fragmento></Fragmento>
        </div>,
        document.getElementById('root')
    )
