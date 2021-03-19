import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default () => (

    <div id="app">
        <h1>Fundamentos React</h1>
        <Fragmento></Fragmento>
        <ComParametro
            titulo="Nota do Aluno"
            aluno="Daniel"
            nota={10}>
        </ComParametro>
        <Primeiro></Primeiro>
    </div>

)