import React from 'react'

export default function Aleatorio(props) {

    const max = props.max
    const min = props.min
    const random = parseInt((Math.random() * (max - min) + max))
    return (
        <div>
            <h2><strong>Valor aleatório</strong></h2>
            <p><strong>Valor minímo : { min } </strong></p>
            <p><strong>Valor máximo : { max } </strong></p>
            <p><strong>Valor escolhido : { random } </strong></p>
        </div>
    )
}