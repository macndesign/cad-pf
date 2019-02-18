import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { menu } from './App';

const Cadastro = ({ history }) => {
    const [nome, setNome] = useState('');
    const [data_nascimento, setData_nascimento] = useState('1990-01-01');
    const [genero, setGenero] = useState('M');
    useEffect(() => {
        document.getElementById(menu.create.label).classList.add('active');
        return () => {
            document.getElementById(menu.create.label).classList.remove('active');
        }
    }, []);
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
                <div className="button-bar">
                    <button type="submit">Salvar</button>
                    <button className="bg-info" type="button" onClick={() => { history.push('/') }}>Voltar</button>
                </div>
            </form>
        </div>
    );
};

export default Cadastro;
