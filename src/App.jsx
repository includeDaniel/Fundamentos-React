import React from 'react'
import './App.css'

import Card from './components/layout/Card'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo=" #8 - Renderização Condicional" color="#ABB2B9">
                    <ParOuImpar numero={10}></ParOuImpar>
                </Card>

                <Card titulo=" #07 - Desafio Repetição" color="#9F2B68">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo=" #06 - Repetição" color="#00A36C">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo=" #05 - Componente com filhos" color="#6495ED">
                    <Familia sobrenome="Nunes">
                        <FamiliaMembro nome="Daniel" />
                        <FamiliaMembro nome="Vitor" />
                        <FamiliaMembro nome="Davi" />
                    </Familia>
                </Card>

                <Card titulo=" #04 - Desafio Aleatório" color="#AF7AC5">
                    <Aleatorio min={1} max={100} ></Aleatorio>
                </Card>

                <Card titulo=" #03 - Fragmento" color="#F39C12">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo=" #02 - Com Parametro" color="#C0392B">
                    <ComParametro
                        titulo="Nota do Aluno"
                        aluno="Daniel"
                        nota={10}>
                    </ComParametro>
                </Card>

                <Card titulo=" #01 - Primeiro Componente" color="#58D68D">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div >

    )
}