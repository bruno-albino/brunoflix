import { ENDPOINT_BACKEND } from '../config'

const URL_CATEGORIES = `${ENDPOINT_BACKEND}categories`

const getAllWithVideos = () => {
    return fetch(URL_CATEGORIES + '?_embed=videos')
    .then(async response => {

        if(response.ok) {
            const res = await response.json()
            return res
        }

        throw new Error('Não foi possível buscar os dados')
    })
}

const getAll = () => {
    return fetch(URL_CATEGORIES)
    .then(async response => {
        if(response.ok) {
            const res = await response.json()
            return res
        }

        throw new Error('Não foi possível buscar os dados')
    })
}

const create = category => {
    return fetch(URL_CATEGORIES, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(category)
    })
    .then(async response => {

        if(response.ok) {
            const res = await response.json()
            return res
        }

        throw new Error('Não foi possível cadastrar a categoria')
    })
}


export default {
    getAllWithVideos,
    getAll,
    create
}