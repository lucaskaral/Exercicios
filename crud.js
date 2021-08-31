
class Produto {
	codigo;
	nome;
	preco;
	constructor(cod, name, price) {
		this.codigo = cod;
		this.nome = name;
		this.preco = price;
	};

};

class Repositorio {
	constructor() {
		this.listaProdutos = [];
	}
	
	addProduto(produto) {
		if (this.listaProdutos == undefined) return;
		this.listaProdutos.push(produto);
	}

	deleteProduto(produto) {
		if (this.listaProdutos == undefined) return;
		this.listaProdutos.pop(produto);
	}

	buscarPorId(id) {
		for(let prod of this.listaProdutos){
			if(prod.id == id) {
				return prod;
			}
		}
	}

	updateProduto(produto) {
		for(let prod of this.listaProdutos){
			if(prod.id == id) {
				prod = produto;
			}
		}
	}

	showProdutos() {
		if (this.listaProdutos == undefined) {
			console.log("Nao ha produtos cadastrados");
			return;
		}
		this.listaProdutos.forEach(element => {
			console.log("Codigo Produto: " + element.codigo);
			console.log("Nome Produto  : " + element.nome);
			console.log("Preço Produto : " + element.preco);
			console.log("...................................");
		});
		console.log("================================================")
	}
};

var repo = new Repositorio();
var prod = new Produto(1, "prod1", 1);
var prod2 = new Produto(2, "prod2", 2);

repo.addProduto(prod);
repo.addProduto(prod2);
repo.showProdutos();

prod = new Produto(1, "produto alterado", 11);

repo.showProdutos();

var p = repo.buscarPorId(1);
console.log("............." + p);

repo.deleteProduto(prod);

repo.showProdutos();