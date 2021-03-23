import React from 'react'


export default function Filho(props) {

    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>

            <button onClick={
                function (e) {
                    props.quandoClicar('João', gerarIdade(), gerarNerd())
                }
                
            }
            
            >Fornecer Informações</button>
        </div>
    )
}