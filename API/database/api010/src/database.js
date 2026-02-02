// Class para Banco de Dados.
export class Database {
    // Criamos uma propriedade database que recebe um objeto vazio.
    database = {}

    // Método que recebe 2 propriedades.
    insert(table, data) {
        // Verficia se o primeiro parâmetro que enviamos é um array.
        if(Array.isArray(this.database[table])) {
            // Caso for ele irá adicionar o segundo parâmetro que enviamos dentro do array.
            this.database[table].push(data)
        } else {
            // Caso não for ele pega o primeiro parâmetro e cria um array, que recebe o primeiro item o segundo parâmetro enviado.
            this.database[table] = [data]
        }
    }

    // aqui é um método que recebe um parâmetro.
    select(table) {
        // e retorna o array.
        return this.database[table]
    }
}
