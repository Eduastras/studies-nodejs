import { routes } from "../routes.js";

export function routeHandler(request, response) {
    // routes é o array que criamos e importamos do routes.js
    // .find() é um método que percorre todos os itens do array, e retorna o ITEM que satisfizer a condição. (então rota é o parâmetro que percorre cada item do array)
    // A condição é se rota.method (rota é cada item do array, e cada item é um objeto, ou seja fica objeto.method, o que seria a propriedade method do próprio objeto)
    // Se o valor da propriedade for igual ao request.method (que é o método enviado na requisição), forem iguais então satisfaz a condição, então será retornado o item do array que no nosso caso é um objeto)
    const route = routes.find(rota => {
        return rota.method === request.method && rota.path === request.url
    })

    // fizemos uma condicional para ver se tem a rota, ou seja se é um thrusty, pq se a condição do .find() não for satisfeita retornará um undefined, e que por sua vez é falhsty, então dará como false no if.
    if (route) {
        // A gente chama o método do route passando pra ele o request e o response, que a gente recebe na function.
        // Também tem um return, então isso para a function e manda pra function routeHandler o valor do método route.controller().
        return route.controller(request, response)
    }

    // Caso não caia na condição acima, vai cair aqui retornando o fim da resposta como "rota não encontrada!"
    return response.writeHead(404).end("Rota não encontrada!")
}