import http from "http"

const server = http.createServer(async (request, response) => {    
    const { method, url } = request

    if(method === "GET" && url === "/products") {
        return response.end(`Lista de produtos!`)
    }

    if(method === "POST" && url === "/products") {
        // Criamos um array, que vai servir para armazenar os pedaços que chegarem da requisição http (o node lida dessa maneira, pedaço por pedaço).
        const pedacos = []

        // Criamos um laço de repetição for, que a variavel chunk vai passar por cada valor da stream de request (que é a FORMA como o nosso body (corpo da requisição) chega no nodejs).
        // Resumido o chunk ta passando por cada pedaçinho da requisição, que o stream trouxe (ele mesmo quem quebra).
        // Cada pedaçinho da requisição é um Buffer (que é dado binário no nodejs).
        for await (const chunk of request) {
            // aqui adicionamos no array "pedacos" que criamos acima, cada valor. Que é cada pedaço da requisição.
            pedacos.push(chunk)
        }
        
        // Mostra o array com cada buffer(que é cada pedacinho do corpo da nossa requisição)
        console.log(pedacos)
        
        // Buffer é uma estrutura de dados do próprio do Nodejs, (e a forma como nodejs representa dados binários na memória).
        // Buffer.concat() é um método do próprio Buffer para juntar cada dado binário em um único Buffer (tipo um Bufferzão REI), é um buffer com todos os bytes na ordem correta.
        // o .toString() serve para transformar esse bufferzão em uma string (um texto legível).
        console.log(Buffer.concat(pedacos).toString())

        return response.writeHead(201).end(`Produto cadastrado!`)
    }

    return response.writeHead(404).end("Rota não encontrada!")
})

server.listen(3333)