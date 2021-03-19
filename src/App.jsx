import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default function App(props) {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
        
<div className="Cards">
            <Card titulo=" #04 - Desafio Aleatório">
                <Aleatorio min={1} max={100} ></Aleatorio>
            </Card>

            <Card titulo=" #03 - Fragmento">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo=" #02 - Com Parametro">
                <ComParametro
                    titulo="Nota do Aluno"
                    aluno="Daniel"
                    nota={10}>
                </ComParametro>
            </Card>

            <Card titulo=" #01 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>
            </div>




        </div>

    )
}