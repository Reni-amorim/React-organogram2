import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Botao from '../Botao'
const Formulario = (props) => {
    
    const times = [
        'Time 1',
        'Time 2',
        'Time 3',
        'Time 4',
        'Time 5'
    ]
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        //console.log('Salvando card =>', nome, cargo, imagem, time)
        //props.colabCadastrado
        props.colabCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }
    //const aoSalvar = (evento)

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha od dados para criar o card do colaborador </h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} alterar={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} alterar={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} alterar={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true} label="time" itens={times} valor={time} alterar={valor => setTime(valor)}/>
                <Botao> Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario