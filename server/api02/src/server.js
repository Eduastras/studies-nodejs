// Importação do pacote http, utilizando o ES modules.
// O pacote http do node.js é um módulo nativo, que permite ao node criar servidores web e realizar requisições HTTP.
// Utilizamos node:, para dizer que este pacote é nativo do node.js
import http from "node:http"

// utilizamos o pacote http.createServer para criar um servidor, e precisamos de dois parâmetros, o primeiro é a requisição/solicitação e o segundo parâmetro é a resposta.
const server = http.createServer((request, response) => {
    return response.end("Hello Word!")
})

// O método .listen() no Node.js (módulo http) serve para iniciar o servidor HTTP e fazê-lo "escutar" (ficar de prontidão) por conexões de entrada em uma porta e endereço IP específicos. Sem chamar o .listen(), você cria a instância do servidor, mas ele não aceita requisições. 
// colocamos no parênteses a porta de entrada.
server.listen(3333)
