import React, { useEffect } from 'react';
import axios from 'axios';
import useFormData from './useFormData';
import { handleExcluir } from './services';

const CadastroDetail = ({ match, history }) => {
    const formDataHook = useFormData();
    const { nome, data_nascimento, genero, escolaridade } = formDataHook.formData;
    useEffect(() => {
        axios.get(`/cadastros/${match.params.id}/`).then(resp => {
            formDataHook.fillData(resp.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/cadastros/${match.params.id}/`, { nome, data_nascimento, genero, escolaridade })
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
                    <input name="nome" type="text"  value={nome}
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
                    <button className="bg-danger" type="button" style={{float: 'left'}}
                        onClick={() => handleExcluir(match.params.id, history, nome, function callback(){})}>Excluir</button>
                    <button type="submit">Editar</button>
                    <button className="bg-info" type="button" onClick={() => { history.push('/') }}>Voltar</button>
                </div>
            </form>
        </div>
    );
};

export default CadastroDetail;
