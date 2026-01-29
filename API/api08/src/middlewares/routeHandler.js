import { routes } from "../routes.js";

export function routeHandler(request, response) {
    const route = routes.find(rota => {
        // rota.path agora é uma expressão regular, portanto tem o método de test, que testa e retorna um resultado booleano, se o texto atende os requisitos da expressão regular.
        return rota.method === request.method && rota.path.test(request.url)
    })

    if (route) {
        console.log(request.url)
        
        const routeParams = request.url.match(route.path)
        console.log(routeParams)
        const { ...params } = routeParams.groups

        request.params = params

        return route.controller(request, response)
    }
    
    return response.writeHead(404).end("Rota não encontrada!")
}