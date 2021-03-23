import React from 'react'


export default function Filho(props) {
    return (
        <div>
            <div>
                
            </div>
            <button onClick={
                function (e) {
                    props.quandoClicar('João', 22, true)
                }
                
            }
            
            >Fornecer Informações</button>
        </div>
    )
}