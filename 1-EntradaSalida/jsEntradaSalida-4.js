/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{ 

	var respuesta;
	respuesta = prompt("ingrese su nombre","aqui");
	document.getElementById("elNombre").value = respuesta;

}

