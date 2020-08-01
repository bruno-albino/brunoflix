import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm'
import categoriesRepositoy from'../../../repositories/categories'

const CadastroCategoria = () => {
    const [categories, setCategories] = useState([])
    
    const history = useHistory()
    const initialValues = {
        title: '',
        description: '',
        color: ''
    }

    const { values, handleChange } = useForm(initialValues)

    useEffect(() => {
        categoriesRepositoy.getAllWithVideos()
        .then(response => setCategories(response))
    }, [])



    const handleSubmit = e => {
        e.preventDefault()

        categoriesRepositoy.create({
            title: values.title,
            description: values.description,
            color: values.color
        })
        .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
        });
    }

    return (
        <PageDefault>
            <h1>Cadastro categoria</h1>

            <form onSubmit={handleSubmit}>
                <FormField
                    label='Título da Categoria'
                    name='title'
                    value={values.title}
                    onChange={handleChange}
                    type='text'
                />
                <FormField
                    label='Descrição'
                    name='description'
                    value={values.description}
                    onChange={handleChange}
                    type='textarea'
                />
                <FormField
                    label='Cor'
                    name='color'
                    value={values.color}
                    onChange={handleChange}
                    type='color'
                />

                <Button type='submit'>Cadastrar</Button>
            </form>

            {!categories.length && <div>
                Loading...
            </div>}

            <ul>
                {categories.map(categorie => {
                    return (
                        <li key={categorie.title}>{categorie.title}</li>
                    )
                })}
            </ul>

            <Link to='/'>
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria