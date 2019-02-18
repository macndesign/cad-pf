import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { menu } from './App';

const CadastroList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        document.getElementById(menu.list.label).classList.add('active');
        axios.get('/cadastros/').then(resp => {
                setItems(resp.data.results);
            }).catch(err => {
                console.log(err);
            });
        return () => {
            document.getElementById(menu.list.label).classList.remove('active');
        };
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data de Nascimento</th>
                        <th>Gênero</th>
                    </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td><Link to={`/${item.id}`}>{item.nome}</Link></td>
                        <td>{item.data_nascimento}</td>
                        <td>{item.genero === 'M' ? 'Masculino' : 'Feminino'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CadastroList;
