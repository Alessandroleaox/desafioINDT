

//Coletando os dados
var form = document.getElementById('formulario')

form.addEventListener('submit', function(e){
	e.preventDefault();

	var titulo = document.getElementById('title').value;
	var isbnCod = document.getElementById('isbn').value;
	var authorIdCod = document.getElementById('authorId').value;

	//console.log (titulo)

			let _data = {
		 				 title: titulo,
		  				  isbn: isbnCod, 
		                  authorId:authorIdCod
						}
//Fim da coleta
//Iniciado o método
	fetch('https://bibliapp.herokuapp.com/api/books?access_token=ndtidesafio',{
		method:'POST',
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

