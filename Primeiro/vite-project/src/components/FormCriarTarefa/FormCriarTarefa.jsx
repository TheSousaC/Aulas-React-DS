import { useState } from 'react';

import { Botao, CampoTexto, Loading } from "../../components";
import { useAppContext } from '../../hooks';

import style from './FormCriarTarefa.module.css';

const FormCriarTarefa = () => {
    const { adicionarTarefa, loadingCriar } = useAppContext();
    
    const [ nomeTarefa, setNomeTarefa ] = useState('');
    

    const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
    };

    const submeterFormulario = (event) => {
    event.preventDefault(); // Para a tela n carregar (comportamento do navegador quando usa form onSubmite)

    if(!nomeTarefa) {
        return;
    }

    adicionarTarefa(nomeTarefa)

    setNomeTarefa('');
    };

    return (
        <form className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
            <CampoTexto 
            value={nomeTarefa} 
            onChange={onChangeNomeTarefa}
            />
            <Botao texto={loadingCriar ? <Loading /> : '+'} />
        </form>
    );
};

export { FormCriarTarefa };