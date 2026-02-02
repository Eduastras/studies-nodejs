// pacote do próprio node para lidar com arquivos (files).
import fs from "node:fs/promises";

// Estamos criando uma nova URL, o primeiro parâmetro é nome do arquivo (caminho relativo), e o segundo o endereço da URL.
const DATABASE_PATH = new URL("db.json", import.meta.url);

// Class para Banco de Dados.
export class Database {
  // Criamos uma propriedade database que recebe um objeto vazio.
  database = {};

  constructor() {
    this.persist();
  }

  // Função para colocar no db.json (banco de dados) o database.
  persist() {
    // Usando o pacote fs, para criar um arquivo baseado na URL que criamos, e no arquivo mandamos o database convertido em objeto JSON.
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.database));
  }

  // Método que recebe 2 propriedades.
  insert(table, data) {
    if (Array.isArray(this.database[table])) {
      this.database[table].push(data);
    } else {
      this.database[table] = [data];
    }

    // após criarmos ou darmos push no array, chamamos novamente a função persist.
    this.persist();
  }

  // aqui é um método que recebe um parâmetro.
  select(table) {
    return this.database[table];
  }
}
