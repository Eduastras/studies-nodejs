import http from "http"

const server = http.createServer((req, res) => {
    
    return res.end("Meu primeiro servidor!")
})

server.listen(3333)