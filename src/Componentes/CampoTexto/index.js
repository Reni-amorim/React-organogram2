import './CampoTexto.css'
import { useState } from 'react'
const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`

    const digitado = (e) => {
        props.alterar(e.target.value)
    }
    

return (
    <div className="campo-texto">
        <label>{props.label}</label>
        <input value={props.valor} onChange={digitado} required={props.obrigatorio} placeholder={placeholderModificada} />
    </div>
    )
}

export default CampoTexto