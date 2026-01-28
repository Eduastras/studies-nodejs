import { parseRouthPath } from "./utils/parseRoutePath.js"

// Um array com as rotas separadas.
export const routes = [
    {
        method: "GET",
        // path = caminho
        path: "/products",
        controller: (request, response) => {
            return response.end(`Lista de produtos!`)
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
            // Retorna o encerramento da resposta, com a mensagem de que o produto do ID da propriedade que criamos no request la no routeHandler foi deletado.
            return response.end(`Produto do ID ${request.params.id} deletado!`)
        }
    },
// Aqui temos o método de array .map(), que irá percorrer todos os itens do array, e retornar um NOVO array, com a função executada em cada item.
// Aqui no caso estamos retornando um NOVO objeto dentro desse NOVO array. Utilizamos o spread (...) pra espalhar as propriedades do objeto dentro desse nosso novo objeto, e substituimos a propriedade path, chamando a função parseRouthPath mandando o conteúdo que esta dentro da propriedade do path antigo.
// Isso aqui foi apenas para não precisarmos na mão chamar dentro de cada path a função parseRoutePath mandando cada conteúdo de path.
].map(route => {
    return {
        ...route,
        path: parseRouthPath(route.path)
    }
})