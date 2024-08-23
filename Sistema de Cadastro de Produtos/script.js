let produtos = [];

function adicionarProduto(nome, preco, quantidade) {
    if (!nome || typeof nome !== 'string') {
        console.log('Nome inválido.');
        return;
    }
    if (isNaN(preco) || preco <= 0) {
        console.log('Preço inválido. Deve ser um número maior que 0.');
        return;
    }
    if (isNaN(quantidade) || quantidade <= 0) {
        console.log('Quantidade inválida. Deve ser um número maior que 0.');
        return;
    }

    const produto = {
        nome: nome,
        preco: parseFloat(preco),
        quantidade: parseInt(quantidade)
    };

    produtos.push(produto);
    console.log('Produto adicionado com sucesso.');
}

function listarProdutos() {
    if (produtos.length === 0) {
        console.log('Nenhum produto cadastrado.');
        return;
    }

    console.log('Lista de Produtos:');
    produtos.forEach((produto, index) => {
        console.log(`Produto ${index + 1}: Nome - ${produto.nome}, Preço - R$${produto.preco.toFixed(2)}, Quantidade - ${produto.quantidade}`);
    });
}

function calcularValorTotal() {
    let valorTotal = produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
    console.log(`Valor total dos produtos em estoque: R$${valorTotal.toFixed(2)}`);
}

adicionarProduto('Geladeira', 120.50, 10);
adicionarProduto('Mouse', 300.00, 5);
adicionarProduto('Notebook', 15.75, 20);
listarProdutos();
calcularValorTotal();
