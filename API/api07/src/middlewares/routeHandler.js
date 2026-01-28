import { routes } from "../routes.js";

export function routeHandler(request, response) {
    const route = routes.find(rota => {
        // rota.path agora é uma expressão regular, portanto tem o método de test, que testa e retorna um resultado booleano, se o texto atende os requisitos da expressão regular.
        return rota.method === request.method && rota.path.test(request.url)
    })

    if (route) {
        // aqui temos a url do request fazendo match com a expressão regular do route.path, quando faz o match ele retorna em um array, alguns itens.
        const routeParams = request.url.match(route.path)
        // Visualizando o array com ons itens que é retornado no match.
        console.log(routeParams)

        // como a nossa expressão regular tem um grupo (?<$1>) com nome, o match retorna um item chamado groups, com um objeto com o nome do grupo e o texto que a expressão regular capturou.
        console.log(routeParams.groups)

        // pegamos o routeParams.groups e despejamos (spread) em um objeto e desestruturamos dentro de uma variavel/constante.
        const { ...params } = routeParams.groups

        // exibindo o conteúdo dentro da variavel.
        console.log(params)

        // criamos dentro de request (requisição), uma propriedade chamada params e nela colocamos a variavel que tá recebdno o groups.
        request.params = params

        // Aqui retornamos pra função routeHandler a chamada do método route.controller mandando o request e a response.
        return route.controller(request, response)
    }
    
    return response.writeHead(404).end("Rota não encontrada!")
}