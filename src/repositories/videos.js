import { ENDPOINT_BACKEND } from '../config'

const URL_VIDEOS = `${ENDPOINT_BACKEND}videos`

const create = video => {
    return fetch(URL_VIDEOS, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(video)
    })
    .then(async response => {

        if(response.ok) {
            const res = await response.json()
            return res
        }

        throw new Error('Não foi possível cadastrar os dados')
    })
}


export default {
    create
}