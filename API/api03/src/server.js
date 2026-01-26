import http from "http"

const server = http.createServer((req, res) => {
    // Sempre precisamos dar uma resposta quando tivermos um servidor, caso contrário ele vai ficar carregando infinitamente
    return res.end("Meu primeiro servidor!")
})

server.listen(3333)