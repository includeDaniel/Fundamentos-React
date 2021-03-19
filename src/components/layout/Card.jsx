import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
        <div className="Card">
            <div className="Tile"> {props.titulo} </div>
            <div
                className="Content">Conteúdo
                {props.children}
            </div>

        </div>
    )
}