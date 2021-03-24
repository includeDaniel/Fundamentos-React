import React from 'react'

export default function Botoes (props) {

    return (
            <div>
            <button onClick={props.setInc} > + </button>
            <button onClick={props.setDec} > - </button>
        </div>

    )
}