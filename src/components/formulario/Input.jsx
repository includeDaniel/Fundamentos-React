import React, { useState } from 'react'
import './Input.css'

export default function Formulario(props) {

    const [valor, setValor] = useState('inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex', 
                flexDirection:'column' 
            }}>
                <input value={valor} onChange={quandoMudar}></input>
                <input value={valor} readOnly ></input>
                <input value={undefined} ></input>
            </div>
        </div>
    )
}