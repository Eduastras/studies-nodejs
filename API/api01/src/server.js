import http from "http"

const server = http.createServer((req, res) => {
    
    return res.end("Minha primeira API!")
})

server.listen(3333)