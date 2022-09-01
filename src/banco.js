import mysql from 'mysql2'; //instalado via npm e importado


// Configuração a conexão
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'suniow89_apiadriel',
    passowrd: '',
    database: 'suniow89_apiadriel'
});

// conectando ao banco de dados
// conexao.connect();

conexao.connect (erro => {
    if(erro) {
        console.error(`Erro ao conectar: ${erro.message}`); //
    } else {
        console.log(`Banco de dados conectado com sucesso!`);
    }
});

export default conexao;