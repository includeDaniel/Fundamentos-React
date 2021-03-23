import React from 'react'

export default function ParouImpar(props) {

    const isPar = props.numero % 2 === 0
    return (
        <div>
            {isPar ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )
}

