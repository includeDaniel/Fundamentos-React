import React from 'react'
import IndiretaFilho from './IndiretaFilho'


export default function Pai (props) {

    let nome ='Daniel'
    let idade= 16
    let nerd= false

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam

        console.log(nomeParam, idadeParam, nerdParam)
    }
    return(
        <div>
            <div>
            <span>{nome} </span>
            <span><strong>{idade}</strong></span>
            <span> {nerd ? 'Verdadeiro' : 'False'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}