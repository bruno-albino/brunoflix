const ENDPOINT_BACKEND = window.location.hostname.includes('localhost')
? 'http://localhost:8080/'
: 'https://nerd-flix.herokuapp.com/'

export {
    ENDPOINT_BACKEND
}