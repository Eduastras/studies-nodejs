// Middleware
export async function jsonBodyHandler(request, response) {
    const pedacos = []

    for await (const chunk of request) {
        pedacos.push(chunk)
    }

    try {

        request.body = JSON.parse(Buffer.concat(pedacos).toString())
    } catch (error) {

        request.body = null
    }


    response.setHeader("Content-Type", "application/json")
}