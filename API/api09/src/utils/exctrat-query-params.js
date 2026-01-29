export function extractQueryParams(query) {
    // .slice() aqui serve para cortar o primeiro caractere da nossa string, que no nosso caso aqui é ?, e retorna uma nova variavel com o texto formatado.
    // em seguida utilizamos o método split(), que divide uma string em um array, com base no caractere que nós colocarmos, no nosso caso dividimos a string quando tiver o &.
    console.log(query.slice(1).split("&"))

    // aqui utilizamos o .reduce() que percorre cada item do array executando uma função de callback e retorna o acumulador.
    // queryParams é o acumulador e o param é cada item que tá sendo iterado no momento.
    return query.slice(1).split("&").reduce( (queryParams, param) => {

        // aqui pegamos param, que é cada item, que é uma string e separamos ele por = (como usamos o split a string agora fez um novo array separandos os itens por =  ).
        // e pegamos esse novo array e desestruturamos o primeiro item, dentro da varivel key. E desestruturamos o segundo item dentro da variavel value.
        const [key, value] = param.split("=")
        
        // Como o valor inicial do acumulador é um objeto vazio, então queryParams automaticamente é um objeto vazio, pq ele é o acumulador.
        // Aqui estamos utilizando a notação de colchetes para criar dentro do objeto uma propriedade que vai se chamar o que tá dentro da variavel key, e o valor da propriedade vai ser o valor que tá dentro da variavel value.
        queryParams[key] = value

        // aqui a gente retorna pro reduce o objeto.
        return queryParams
    }, 
    // Aqui definimos que o valor INICIAL do acumulador é um objeto vazio {}.
    {})
}