function mostrar()
{
	var contadorPositivo=0;
	var contadorNegativos=0;
	//declarar contadores y variables 
	var negativo = 0;
	var positivos = 0; 
	var sumaNegativa;
	var sumaPositiva;
	var contadorDeCeros = 0;
	
	var respuesta="si";

	while(respuesta !="no")
	{
		numero= prompt("ingrese n numero");

		if(numero < 0)
		{
			sumaNegativa= negativo + numero;
			negativo= sumaNegativa;
			contadorNegativos= contadorNegativos + 1;
		}else{

			if(numero > 0 )
			{
				sumaPositiva= positivo + numero
				positivo=sumaPositiva 
				contadorPositivo= contadorPositivo + 1;

			}//if(numero > 0 )
		}//if(numero < 0)

		respuesta= prompt("Desea continuar?");
	
document.write("la suma de los negativos es " + sumaNegativa + "<br>" + "la suma de los positivos es " + sumaPositiva)
	
	}




}//FIN DE LA FUNCIÓN