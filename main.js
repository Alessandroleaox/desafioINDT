//Requisição GET da API
	function fazGet(url){
		let request = new XMLHttpRequest();
			request.open("GET",url,false);
			request.send();
		return request.responseText;
	}
//Fim da Função GET

	function criaLinha(livro){
//Criando linha		
		linha = document.createElement("tr");
//Criando as colunas		
		tdId    = document.createElement("td");
		tdTitle = document.createElement("td");
		tdIsbn  = document.createElement("td");
		tdAutor = document.createElement("td");

//Trazendo os elementos da API e atribuindo nos campos das colunas
		tdId.innerHTML = livro.id;
		tdTitle.innerHTML = livro.title;
		tdIsbn.innerHTML = livro.isbn;
		tdAutor.innerHTML = livro.authorId;

		linha.appendChild(tdId);
		linha.appendChild(tdTitle);
		linha.appendChild(tdIsbn);
		linha.appendChild(tdAutor);

		return linha;


	}

	function main(){
	    let dados = fazGet("https://bibliapp.herokuapp.com/api/books?access_token=ndtidesafio");
	    let livros = JSON.parse(dados);
	    let tabela = document.getElementById("tabela");

	    	livros.forEach(element => {
	    		let linha = criaLinha(element);
	    		tabela.appendChild(linha);
	    	})
	}

			 function removerElemento(elementoClicado) {
			  elementoClicado.closest("table").remove();
}


	//main();

