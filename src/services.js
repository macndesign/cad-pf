import axios from 'axios';

export const handleExcluir = (id, history, nome, callback) => {
    const confirmDelete = window.confirm(`Excluir ${nome}?`);
    if (confirmDelete) {
        return axios.delete(`/cadastros/${id}/`)
            .then(res => {
                history.push('/');
                callback();
                return res;
        })
        .catch(err => {
            console.log(err);
        });
    } else {
        return false;
    }
};
