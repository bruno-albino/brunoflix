import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

const CadastroCategoria = () => {
    const initialValues = {
        name: '',
        description: '',
        color: ''
    }

    const URL = 'http://localhost:8080/categories'

    const [category, setCategory] = useState(initialValues)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(response => {
            setCategories([ ...response ])
        })
    }, [])

    const handleChange = e => {
        setValue(e.target.getAttribute('name'), e.target.value)
    }

    const setValue = (name, value) => {
        setCategory({
            ...category,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        alert('foi')
    }

    return (
        <PageDefault>
            <h1>Cadastro categoria</h1>

            <form onSubmit={handleSubmit}>
                <FormField
                    label='Nome da Categoria'
                    name='name'
                    value={category.name}
                    onChange={handleChange}
                    type='text'
                />
                <FormField
                    label='Descrição'
                    name='description'
                    value={category.description}
                    onChange={handleChange}
                    type='textarea'
                />
                <FormField
                    label='Cor'
                    name='color'
                    value={category.color}
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
                        <li key={categorie.name}>{categorie.name}</li>
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