// Middleware
export async function jsonBodyHandler(request, response) {
    // Array para adicionar cada chunk/buffer.
    const pedacos = []
    
    // Coleta os chunks/buffer de dados da requisição.
    for await (const chunk of request) {
        pedacos.push(chunk)
    }

    try {
        // Concatena os chunk/buffer e converter para string. Em seguida, converte a string para um OBJETO JS.
        request.body = JSON.parse(Buffer.concat(pedacos).toString())
    } catch (error) {
        // Caso de algum tipo de erro, o catch vai transformar o corpo da requisição em nulo.
        request.body = null
    }


    // Aqui o response.setHeader() está colocando no Header da resposta, que o tipo do conteúdo que vai ser entregue será do tipo JSON.
    response.setHeader("Content-Type", "application/json")
}