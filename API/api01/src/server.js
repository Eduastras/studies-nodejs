import http from "http"

const server = http.createServer((request, response) => {
    // request é um objeto (response tambem) com diversas propriedades, e uma delas é o method, do qual podemos ver qual é o método HTTP que foi requisitado.
    // Aqui estamos desestruturando o request, que é um objeto. (pegando a propriedade method do request e passando pra variavel metodo.)
    const { method: metodo } = request
    return response.end(`Metodo: ${metodo}`)
})

server.listen(3333)