import React from 'react'
import DiretaFilho from './DiretaFilho'


export default function (props) {
    return(
        <div>
            <DiretaFilho nome="Daniel" idade={30} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Jessica" idade={15} nerd={false}></DiretaFilho>
        </div>
    )
}