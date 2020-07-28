import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

const CadastroVideo = () => {
    return(
        <PageDefault>
            <h1>Cadastro video</h1>

            <Link to='categoria'>
                Cadastro Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo