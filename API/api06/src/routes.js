// Um array com as rotas separadas.
export const routes = [
    {
        // Método da requisição.
        method: "GET",
        // path = caminho
        path: "/products",
        // o controller é executado lá no routeHandler.js na condição, passando o request e response.
        controller: (request, response) => {
            // Isso aqui é o que retorna pra function routeHandler do routeHandler.js.
            return response.end(`Lista de produtos!`)
        }
    },
    {
        method: "POST",
        // path = caminho
        path: "/products",
        // o controller é executado lá no routeHandler.js na condição, passando o request e response.
        controller: (request, response) => {
            // Isso aqui é o que retorna pra function routeHandler do routeHandler.js.
            return response.writeHead(201).end(JSON.stringify(request.body))
        }
    },
]