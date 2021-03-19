import React from 'react'

export default function Aleatorio(props) {

    const max = props.max
    const min = props.min
    const random = parseInt((Math.random() * (max - min) + min + 1))
    return (
        <div>
            <h2><strong>Valor aleatório</strong></h2>
            <p><strong>Valor minímo : </strong> {min} </p>
            <p><strong>Valor máximo : </strong> {max} </p>
            <p><strong>Valor escolhido : </strong>{random}</p>
        </div>
    )
}