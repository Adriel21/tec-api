import conexao from "./banco.js";

// Função que lê a tabela de alunos do BD
function ler(res) {
// Criando o CRUD
const sql = "SELECT * FROM alunos ORDER BY nome";


// conectando ao BD
conexao.query(sql, (erro, resultados) => {
    if(resultados.length === 0) {
        res.status(204).end(); //204 = Sem conteúdo. O método .end() para qualquer comunicação.
        return; // equivalente ao die()
    } 
    if(erro) {
        res.status(400).json(erro.code); // 400 BAD Request - comunicação não entendida pelo servidor / requisição inválida.
    } else {
        res.status(200).json(resultados); //deu certo, exibir os resultados
    }
}) //query equivale ao  execute do php
}

export { ler };


