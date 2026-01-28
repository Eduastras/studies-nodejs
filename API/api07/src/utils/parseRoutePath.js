export function parseRouthPath(path) {
    // mostra no console.log todas as propriedades path, vindo do routes.js
    // console.log(path)
    // Aqui criamos um RegEx que pega o texto que contem : e letras maiscúlas e minuscúlas de A à Z.
    const routeParametersRegex = /:([a-zA-Z]+)/g

    // Aqui substituimos do que for encontrado pelo regex no path, por (?<$1>[a-z0-9-_]+)
    // ?<$1> --> isso é do replace, que diz que esse regex [a-z0-9-_], vai ser um grupo e vai ter o nome que é o texto que o routeParametersRegex reservou por () e encontrou no path.
    const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)")
    console.log(params)
    
    // Aqui criamos uma nova expressão regular baseado no params
    const pathRegex = new RegExp(params)
    console.log(pathRegex)

    // Retornamos a expressão regular para o path do routes.js
    return pathRegex
}