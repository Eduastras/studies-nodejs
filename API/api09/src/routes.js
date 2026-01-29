import { parseRouthPath } from "./utils/parseRoutePath.js"

// Um array com as rotas separadas.
export const routes = [
    {
        method: "GET",
        // path = caminho
        path: "/products",
        controller: (request, response) => {
            return response.end(JSON.stringify(request.query))
        }
    },
    {
        method: "POST",
        path: "/products",
        controller: (request, response) => {
            return response.writeHead(201).end(JSON.stringify(request.body))
        }
    },
    {
        method: "DELETE",        
        // :id é só uma convenção, para ser criado um grupo no RegEx.
        path: "/products/:id",
        controller: (request, response) => {

            return response.end(`Produto do ID ${request.params.id} deletado!`)
        }
    },
].map(route => {
    return {
        ...route,
        path: parseRouthPath(route.path)
    }
})