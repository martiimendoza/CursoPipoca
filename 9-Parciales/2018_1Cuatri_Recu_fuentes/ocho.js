function mostrar()
{
	var letra;
	var numero;
	var respuesta="si";
	var acumuladorPar=0;

		while(respuesta)
		{
			letra= prompt("ingrese una letra");
			while(isNaN(letra)==false)
			{
				letra= prompt("error, ingrese una letra");
			}
			numero= prompt("ingrese un numero");
			numero= parseInt(numero);
			while(isNaN(numero)==true || numero < -100 && numero > 100)
			{
				numero=prompt("error, intente de nuevo")
				numero=parseInt(numero);
			}

			acumuladorPar= numero / 2 == 0

			respuesta= confirm("desea continuar");
		}





}
