import CampoTexto from '../CampoTexto'
import './Formulario.css'
import '../ListaSuspensa'
import ListaSuspensa from '../ListaSuspensa'
import { useState } from 'react'
const Formulario = (props) => {
    
    const times = [
        'Time 1',
        'Time 2',
        'Time 3',
        'Time 4',
        'Time 5'
    ]
    

    const [time, setTime] = useStateate('')
    
    return (
        <section className="formulario">
            <form>
                <h2>Preencha od dados para criar o card do colaborador </h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="time" itens={times} valor={time} alterar={valor => setTime(valor)}/>
            </form>
        </section>
    )
}

export default Formulario