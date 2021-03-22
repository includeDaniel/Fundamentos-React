import React from 'react'
import FamiliaMembro from './FamiliaMembro'
 
export default function Familia(props) {


    return (
        <div>
            <FamiliaMembro nome="Danil" {...props} />
            <FamiliaMembro nome="Vitor" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Davi" sobrenome="Nunes"/>
        </div>
    )
}