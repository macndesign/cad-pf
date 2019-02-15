import React, { useState } from 'react';
import axios from 'axios';

const Cadastro = ({ history }) => {
    const [nome, setNome] = useState('');
    const [data_nascimento, setData_nascimento] = useState('1990-01-01');
    const [genero, setGenero] = useState('M');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/cadastros/', { nome, data_nascimento, genero })
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
                    <select name="genero" value={genero} required
                        onChange={(e) => setGenero(e.target.value)}>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
};

export default Cadastro;
