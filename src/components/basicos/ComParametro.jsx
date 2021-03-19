import React from 'react'

export default function ComParametro(props) {
    console.log(props)
    const titulo = props.titulo
    const aluno = props.aluno
    const nota = props.nota
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <h2> {titulo} </h2>
            <p> {aluno} que tem nota {nota} foi {status} </p>
        </div>


    )
}