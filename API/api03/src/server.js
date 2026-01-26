import http from "http"

const server = http.createServer((request, response) => {
    // Podemos além de obter o método http da requisição, tbm podemos obter a URL da requisição.
    const { method, url } = request

    // Aqui verificamos se o método e get, e a url é /products
    if(method === "GET" && url === "/products") {
        return response.end(`Lista de produtos!`)
    }

    // Aqui verificamos se o método e post, e a url é /products
    if(method === "POST" && url === "/products") {
        return response.writeHead(201).end(`Produto cadastrado!`)
    }

    // Caso não caia em nenhuma das condições acima, vai cair nessa daqui, pois como estamos dentro de uma function e na if tem return, se cair em uma if vai retornar o que colocarmos, caso não, vai cair aqui e vai retornar 404 rota não encontrada.
    return response.writeHead(404).end("Rota não encontrada!")
})

server.listen(3333)