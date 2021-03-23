import React from 'react'
import If, { Else } from './if'

export default function UsuarioInfo(props) {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem-vindo <p>{usuario.nome}</p>
                <Else>
                    Seja bem-vindo <p>Amigão</p>
                </Else>
            </If>
        </div>
    )

}
