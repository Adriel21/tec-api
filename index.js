import express  from "express";

const app = express();
const porta = 3000;
//configurando ROTAS

// Rota (endpoint) para a raiz da api
app.get('/', (req, res) => {
    res.send('É um dia lindo para andar a cavalo');
});

// Rota (endpoint para exibir todos os alunos)
app.get('/alunos', (req, res) => {
    res.send(`Todos alunos`);
});

// Rota (endpoint) para exibir um único aluno
app.get(`/alunos/:id`, (req, res) => {
    res.send(`Exibindo dados de um aluno`);
});

// Rota (endpoint) para INSERIR alunos
app.post('/alunos', (req, res) => {
    res.send(`INSERINDO alunos`);
});

// Rota para atualizar TODOS os dados do aluno
app.put('/alunos/:id', (req, res) => {
    res.send(`ATUALIZANDO TODOS os dados dos alunos`);
});

app.patch('/alunos/:id', (req, res) => {
    res.send(`ATUALIZA ALGUNS/todos os dados de um aluno`);
});

// Rota (endpint) para EXCLUIR aluno
app.delete(`/alunos/:id`, (req, res) => {
    res.send(`EXCLUI aluno.`);
});


// Configurando o servidor 
app.listen(porta, () => {
    console.log('Servidor Express rodando...')
})