import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm'
import videosRepository from '../../../repositories/videos'

const CadastroCategoria = () => {
    const history = useHistory()
    const initialValues = {
        title: 'Titulo da categoria',
        url: 'https://www.youtube.com/watch?v=hhQ3RtvmfEg',
        categoryId: 1
    }

    const { values, handleChange } = useForm(initialValues)

    const handleSubmit = e => {
        e.preventDefault()

        videosRepository.create({
            title: values.title,
            url: values.url,
            categoryId: values.categoryId
        })
        .then(() => history.push('/'))
        .catch(err => console.log(err))
    }

    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>

            <form onSubmit={handleSubmit}>
                <FormField
                    label='Título do Video'
                    name='title'
                    value={values.title}
                    onChange={handleChange}
                    type='text'
                />

                <FormField
                    label='URL do Video'
                    name='url'
                    value={values.url}
                    onChange={handleChange}
                    type='text'
                />

                <FormField
                    label='Categoria'
                    name='categoryId'
                    value={values.categoryId}
                    onChange={handleChange}
                    type='text'
                />
                <Button type='submit'>Cadastrar</Button>
            </form>
            <br/>
            <Link to='/cadastro/categoria'>
                Ir para categorias
            </Link>
            <br/>
            <Link to='/'>
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria