export function parseRouthPath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g

    const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)")
    console.log(params)
    
    // Aqui criamos uma nova expressão regular baseado no params
    // Criamos uma nova expressão regular que além de pegar params, criamos um novo grupo com o nome query, que pega tudo quer vier depois de ?.
    const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`)    
    console.log(pathRegex)

    // Retornamos a expressão regular para o path do routes.js
    return pathRegex
}
