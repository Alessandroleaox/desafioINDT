
//Coletando os dados
var form = document.getElementById('formularioEdicao')

form.addEventListener('submit', function(e){
	e.preventDefault();

	var cod         = document.getElementById('codProduto').value;
	var titulo      = document.getElementById('titleEdicao').value;
	var isbnCod     = document.getElementById('isbnEdicao').value;
	var authorIdCod = document.getElementById('authorIdEdicao').value;

	//console.log (cod)

	let _data = {
		 				 title: titulo,
		  				  isbn: isbnCod, 
		                  authorId:authorIdCod
						}
//Fim da coleta
//Iniciado o método
	fetch('https://bibliapp.herokuapp.com/api/books/'+cod+'?access_token=ndtidesafio',{
		method:'PUT',
		body: JSON.stringify(_data),
		headers: {"Content-type": "application/json; charset=UTF-8"}
		
	
				
	}).then(function(response){
		return response.json();
	}).then(function(text){
		console.log(data);
	}).catch(function(error){
		console.error(error);
	})

	
});
	


