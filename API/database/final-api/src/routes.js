import { parseRouthPath } from "./utils/parseRoutePath.js"

// Um array com as rotas separadas.
export const routes = [
    {
        method: "GET",
        // path = caminho
        path: "/products",
        controller: ({ request, response, database }) => {
            const products = database.select("products")

            return response.end(JSON.stringify(products))
        }
    },
    {
        method: "POST",
        path: "/products",
        controller: ({ request, response, database }) => {
            // desestruturando o request.body 
            const { name, price } = request.body

            // colocando dentro do método insert.
            database.insert("products", {name, price})

            return response.writeHead(201).end()
        }
    },
    {
        method: "DELETE",        
        // :id é só uma convenção, para ser criado um grupo no RegEx.
        path: "/products/:id",
        controller: ({ request, response }) => {

            return response.end(`ID ${request.params.id} deletado!`)
        }
    },
].map(route => {
    return {
        ...route,
        path: parseRouthPath(route.path)
    }
})