import React, { useEffect } from 'react';
import axios from 'axios';
import { menu } from './App';
import useFormData from './useFormData';

const Cadastro = ({ history }) => {
    const formDataHook = useFormData();
    const { nome, data_nascimento, genero, escolaridade } = formDataHook.formData;
    useEffect(() => {
        document.getElementById(menu.create.label).classList.add('active');
        return () => {
            document.getElementById(menu.create.label).classList.remove('active');
        }
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/cadastros/', { nome, data_nascimento, genero, escolaridade })
        .then(res => {
            history.push('/');
        })
        .catch(err => {
            console.log(err);
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name="nome" type="text"  value={nome} placeholder="Nome completo"
                        onChange={(e) => formDataHook.updateFormData(e)} required/>
                </div>
                <div>
                    <input name="data_nascimento" type="date"  value={data_nascimento}
                        onChange={(e) => formDataHook.updateFormData(e)} required/>
                </div>
                <div>
                    <input type="radio" value="M" name="genero"
                        checked={genero === 'M'} id="generoM"
                        onChange={(e) => formDataHook.updateFormData(e)}/>
                    <label htmlFor="generoM">Masculino</label>
                    <input type="radio" value="F" name="genero"
                        checked={genero === 'F'} id="generoF"
                        onChange={(e) => formDataHook.updateFormData(e)}/>
                    <label htmlFor="generoF">Feminino</label>
                </div>
                <div>
                    <select name="escolaridade" value={escolaridade} required
                        onChange={(e) => formDataHook.updateFormData(e)}>
                        <option value="EM">Ensino Médio</option>
                        <option value="NT">Nível Técnico</option>
                        <option value="NS">Nível Superior</option>
                    </select>
                </div>
                <div className="button-bar">
                    <button type="submit">Salvar</button>
                    <button className="bg-info" type="button" onClick={() => { history.push('/') }}>Voltar</button>
                </div>
            </form>
        </div>
    );
};

export default Cadastro;
