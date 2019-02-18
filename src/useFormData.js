import { useState } from 'react';

const useFormData = () => {
    const [formData, setFormData] = useState({
        nome: '',
        data_nascimento: '1990-01-01',
        genero: 'M',
        escolaridade: 'EM'
    });
    const updateFormData = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const fillData = data => setFormData({ ...formData, ...data });
    return { updateFormData, formData, fillData };
};

export default useFormData;
