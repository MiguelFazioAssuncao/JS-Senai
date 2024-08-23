let tarefas = [];

function adicionarTarefa(descricao) {
    const tarefa = {
        descricao: descricao,
        concluida: false
    };
    tarefas.push(tarefa);
}

function listarTarefas() {
    if (tarefas.length === 0) {
        console.log('Nenhuma tarefa cadastrada.');
        return;
    }
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa.descricao} - ${tarefa.concluida ? 'Concluída' : 'Não concluída'}`);
    });
}

function removerTarefa(indice) {
    if (indice < 0 || indice >= tarefas.length) {
        console.log('Índice inválido.');
        return;
    }
    tarefas.splice(indice, 1);
    console.log('Tarefa removida com sucesso.');
}

function marcarComoConcluida(indice) {
    if (indice < 0 || indice >= tarefas.length) {
        console.log('Índice inválido.');
        return;
    }
    tarefas[indice].concluida = true;
    console.log('Tarefa marcada como concluída.');
}

// Exemplos de uso
adicionarTarefa('Jogar minecraft');
adicionarTarefa('Farmar');
listarTarefas(); 

marcarComoConcluida(0); 
listarTarefas(); 
removerTarefa(1); 
listarTarefas(); 
