import { CampoTexto } from '../CampoTexto'
import { Botao } from '../Botao'
import style from './FormCriarTarefa.module.css'
import { useState } from 'react';

const FormCriarTarefa = (props) => {
    const {setTarefas} = props;

    const [NomeTarefa, setNomeTarefa] = useState("")

    const AdicionarTarefas = (event) =>{ 
       event.preventDefault();

        if(!NomeTarefa){
            return
        }
        
        setNomeTarefa(EstadoAtual => {
            const tarefa = {
                id: EstadoAtual.length+ 1,
                Nome : NomeTarefa
            }
            return[
                ...Estadoatual,
                tarefa,
            ]
        })
        setNomeTarefa('')
     }
    

    const OnChangeMudarNomeTarefa = (event) =>{
        setNomeTarefa(event.currentTarget.value)
    }

    return(
            <form action="" method="post" className={style.FormCriarTarefa} onSubmit={AdicionarTarefas}>
                <CampoTexto value={NomeTarefa} onChange={OnChangeMudarNomeTarefa} />
                <Botao texto='ADICIONAR'/>
            </form>
    )
}
export { FormCriarTarefa }