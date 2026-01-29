import { routes } from "../routes.js";
import { extractQueryParams } from "../utils/exctrat-query-params.js";

export function routeHandler(request, response) {
    const route = routes.find(rota => {
        // rota.path agora é uma expressão regular, portanto tem o método de test, que testa e retorna um resultado booleano, se o texto atende os requisitos da expressão regular.
        return rota.method === request.method && rota.path.test(request.url)
    })

    if (route) {
        console.log(request.url)
        
        const routeParams = request.url.match(route.path)
        console.log(routeParams)

        // Estamos desestruturando a propriedade query do routeParams.group.
        const {query, ...params } = routeParams.groups
        console.log(query)
        
        request.params = params
        // Aqui chamamos a função mandado pra ela a variavel que recebeu a desestruturação da propriedade query.
        // aqui criamos no request a propriedade query.
        // utilizamos o operador ternario, pra saber se tem algo em query, se tiver vai chamar a função passando query, caso nao tenha vai receber um objeto vazio.
        request.query = query ? extractQueryParams(query) : {}

        return route.controller(request, response)
    }
    
    return response.writeHead(404).end("Rota não encontrada!")
}