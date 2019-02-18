import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CadastroDetail = ({ match, history }) => {
    const [nome, setNome] = useState('');
    const [data_nascimento, setData_nascimento] = useState('');
    const [genero, setGenero] = useState('M');
    useEffect(() => {
        axios.get(`/cadastros/${match.params.id}/`).then(resp => {
            setNome(resp.data.nome);
            setData_nascimento(resp.data.data_nascimento);
            setGenero(resp.data.genero);
        }).catch(err => {
            console.log(err);
        });
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/cadastros/${match.params.id}/`, { nome, data_nascimento, genero })
            .then(res => {
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            });
    };
    const handleExcluir = () => {
        axios.delete(`/cadastros/${match.params.id}/`)
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
                        onChange={(e) => setNome(e.target.value)} required/>
                </div>
                <div>
                    <input name="data_nascimento" type="date"  value={data_nascimento}
                        onChange={(e) => setData_nascimento(e.target.value)} required/>
                </div>
                <div>
                    <select name="genero" value={genero}
                        onChange={(e) => setGenero(e.target.value)} required>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </div>
                <div className="button-bar">
                    <button className="bg-danger" type="button" style={{float: 'left'}} onClick={handleExcluir}>Excluir</button>
                    <button type="submit">Editar</button>
                    <button className="bg-info" type="button" onClick={() => { history.push('/') }}>Voltar</button>
                </div>
            </form>
        </div>
    );
};

export default CadastroDetail;
