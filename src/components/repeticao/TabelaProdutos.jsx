import React from 'react'
import produto from '../../data/produtos'
import './TabelaProdutos.css'

export default function TabelaProdutos(props) {

    const Produtos = produto.map((produto, i) => {

        return (
            <tr className={i % 2 == 0 ? 'Par' : ''} key={produto.id}>
                <td>
                    {produto.id}
                </td>
                <td>
                    {produto.nome}
                </td>
                <td>
                    {produto.preço}
                </td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>preço</th>
                    </tr>
                </thead>

                <tbody>
                    {Produtos}
                </tbody>

            </table>
        </div>
    )
}