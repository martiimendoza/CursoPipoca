/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
//var contadorIntentos;
var numeroIngresado;
var mensaje;

	numeroSecreto= Math.floor((Math.random() * 100) + 1);

contadorIntentos= 0 ;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );

	numeroIngresado= document.getElementById('numero').value;

	
	mensaje= numeroSecreto;


	if(numeroIngresado<numeroSecreto)
	{
		mensaje= "falta…";
	}else{

		if(numeroIngresado>numeroSecreto)
		{
			mensaje= "se pasó…";
		}else{
			mensaje= "Usted es un ganador!!! y en solo X intentos";
		}//if(numeroIngresado>numeroSecreto)
	}//if(numeroIngresado<numeroSecreto)

	alert(mensaje);

}

function verificar()
{
	var contadorIntentos;
	
	while(contadorIntentos>5)
	{
		alert("intenta de nuevo");
		contadorIntentos = contadorIntentos + 1; 
		
	}
	
	document.getElementById('intentos').value =contadorIntentos;
}

 
