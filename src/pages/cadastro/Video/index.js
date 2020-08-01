import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function CadastroVideo() {
    const [categories, setCategories] = useState([]);

    const history = useHistory();
    const categoryTitles = categories.map(({ title }) => title)

    const { values, handleChange } = useForm({
        title: '',
        url: '',
        category: '',
    });

    useEffect(() => {
        categoriesRepository
            .getAll()
            .then(response => {
                setCategories(response);
            })
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>

            <form onSubmit={event => {
                event.preventDefault();

                const choosenCategory = categories.find(categorie => {
                    return categorie.title === values.category;
                });

                videosRepository.create({
                    title: values.title,
                    url: values.url,
                    categoryId: choosenCategory.id,
                })
                .then(() => {
                    console.log('Cadastrou com sucesso!');
                    history.push('/');
                });
            }}
            >
                <FormField
                    label="Título do Vídeo"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                />

                <FormField
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label="Categoria"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />

                <Button type="submit">
                    Cadastrar
                </Button>
            </form>

            <br />
            <br />

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;
