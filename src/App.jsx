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
import UsuarioInfo from './components/condicional/Usuarioinfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'


export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo=" #11 - Componente Controlado" color="#006400">
                    <Input></Input>
                </Card>

                <Card titulo=" #10 - Comunicação Indireta" color="#006400">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo=" #9 - Comunicação Direta" color="#FFD700">
                    <ParOuImpar numero={10}></ParOuImpar>
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo=" #8 - Renderização Condicional" color="#ABB2B9">
                    <ParOuImpar numero={10}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Daniel' }}></UsuarioInfo>
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