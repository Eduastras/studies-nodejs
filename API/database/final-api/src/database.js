// pacote do próprio node para lidar com arquivos (files).
import fs from "node:fs/promises"

// Estamos criando uma nova URL, o primeiro parâmetro é nome do arquivo (caminho relativo), e o segundo o endereço da URL.
const DATABASE_PATH = new URL("db.json", import.meta.url)

// Class para Banco de Dados.
export class Database {
  // # é para deixar a propriedade privada, ela só fica disponível dentro da própria classe
  #database = {}

  constructor() {
    // fs.readfile é para ler o arquivo, o primeiro parâmetro é a URL, e o segundo é a codificação do arquivo.
    // UTF8 é para codificar em STRING.
    fs.readFile(DATABASE_PATH, "utf8")
      .then((data) => {
        // Mostra no console.log o arquivo lido em formato JS.
        // console.log(JSON.parse(data))
        this.#database = JSON.parse(data)
      })
      // caso o arquivo ainda não exista ele chama a função persist.
      .catch(() => this.#persist())
  }

  // Função para CRIAR e ESCREVER no db.json (banco de dados) o database.
  #persist() {
    // Usando o pacote fs, para criar um arquivo baseado na URL que criamos, e no arquivo mandamos o database convertido em objeto JSON.
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
  }

  // Método que recebe 2 propriedades.
  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    // após criarmos ou darmos push no array, chamamos novamente a função persist.
    this.#persist()
  }

  // aqui é um método que recebe um parâmetro.
  select(table) {
    // se existe a propriedade ele retorna ela, caso não exista ele retorna um array vazio.
    return this.#database[table] ?? []
  }
}
