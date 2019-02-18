import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { menu } from './App';
import { handleExcluir } from './services';

const CadastroList = ({ history }) => {
    const [items, setItems] = useState([]);
    const handleDate = date => new Date(date).toLocaleDateString();
    const handleList = () => {
        axios.get('/cadastros/').then(resp => {
            setItems(resp.data.results);
        }).catch(err => {
            console.log(err);
        });
    };
    const handleRemoveItem = (item, i) => {
        const callback = () => {
            const newItems = items.slice();
            newItems.splice(i, 1);
            setItems(newItems);
        };
        handleExcluir(item.id, history, item.nome, callback);
    };

    useEffect(() => {
        document.getElementById(menu.list.label).classList.add('active');
        handleList();
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item, i) => (
                    <tr key={item.id}>
                        <td><Link to={`/${item.id}`}>{item.nome}</Link></td>
                        <td>{handleDate(item.data_nascimento)}</td>
                        <td>{item.genero === 'M' ? 'Masculino' : 'Feminino'}</td>
                        <td><button className="bg-danger" type="button" style={{padding: '5px 15px', float: 'right'}}
                            onClick={() => handleRemoveItem(item, i)}>x</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CadastroList;
