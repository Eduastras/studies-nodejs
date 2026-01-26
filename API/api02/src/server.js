import http from "http"

const server = http.createServer((request, response) => {
    const { method } = request

    // writeHead() é um método de response utilizado para enviar um código de resposta (status code) e cabeçalhos opcionais (headers) ao cliente antes de enviar o corpo de resposta (body)
    // .end() serve para sinalizar para o servidor que o cabeçalho e o corpo da resposta foram enviados. (sem ele o client fica esperando infinitamente.)
    return response.writeHead(200).end(`Criado com sucesso`)
})

server.listen(3333)