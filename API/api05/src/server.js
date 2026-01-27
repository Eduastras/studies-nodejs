import http from "http"
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js"

const server = http.createServer(async (request, response) => {    
    const { method, url } = request

    // Precisamos do await porque é uma função assíncrona, que lida com stream.
    await jsonBodyHandler(request, response)

    if(method === "GET" && url === "/products") {
        return response.end(`Lista de produtos! ${JSON.stringify(request.body)}`)
    }

    if(method === "POST" && url === "/products") {
        // Aqui temos agora a propriedade body no nosso request, graças ao middleware.
        console.log(request.body)

        // Aqui retornamos a resposta para o cliente, o nosso request.body. PORÉM como estamos enviando pra API tem que ser enviado em formato JSON, então convertemos utilizando o JSON.stringfy().
        return response.writeHead(201).end(JSON.stringify(request.body))
    }

    return response.writeHead(404).end("Rota não encontrada!")
})

server.listen(3333)