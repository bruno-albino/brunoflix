const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const PORT = process.env.PORT || 8080

server.use(router)
server.use(middlewares)
server.listen(() => {
    console.log('JSON server is running on PORT: ', PORT)
})
