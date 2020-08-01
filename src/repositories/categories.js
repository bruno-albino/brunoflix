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


export default {
    getAllWithVideos
}