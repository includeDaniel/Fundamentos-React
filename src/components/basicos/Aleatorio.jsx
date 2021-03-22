import React from 'react'

export default function Aleatorio(props) {

    const max = props.max
    const min = props.min
    const random = parseInt((Math.random() * (max - min) + min + 1))
    return (
        <div>
            <h2>Valor aleatório</h2>
            <p>Valor minímo :  {min} </p>
            <p>Valor máximo :  {max} </p>
            <p>Valor escolhido : {random}</p>
        </div>
    )
}