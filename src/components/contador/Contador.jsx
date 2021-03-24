import React, { Component } from 'react'
import './Contador.css'
import Display from './Display'
import PassoForm from './PassoFrom'
import Botoes from './Botoes'
 
class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value
        });
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <label htmlFor="passoInput">Passo: </label>
                <input id="passoInput"
                    type="number"
                    value={this.state.passo}
                    onChange={this.setPasso}></input>
                <div>
                    <button onClick={this.inc} > + </button>
                    <button onClick={this.dec} > - </button>
                </div>
            </div>
        )
    }
}
export default Contador