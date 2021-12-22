/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioIngresadoUno;
	var precioIngresadoDos;
	var precioIngresadoTres;
	var suma;

	precioIngresadoUno= document.getElementById('PrecioUno').value;
	precioIngresadoUno= parseInt(precioIngresadoUno);
	precioIngresadoDos= document.getElementById('PrecioDos').value;
	precioIngresadoDos= parseInt(precioIngresadoDos);
	precioIngresadoTres= document.getElementById('PrecioTres').value;
	precioIngresadoTres= parseInt(precioIngresadoTres);

	suma= (precioIngresadoUno + precioIngresadoDos + precioIngresadoTres);

	alert("la suma es " + suma);

}
function Promedio () 
{
	var precioIngresadoUno;
	var precioIngresadoDos;
	var precioIngresadoTres;
	var promedio;

	precioIngresadoUno= document.getElementById('PrecioUno').value;
	precioIngresadoUno= parseInt(precioIngresadoUno);
	precioIngresadoDos= document.getElementById('PrecioDos').value;
	precioIngresadoDos= parseInt(precioIngresadoDos);
	precioIngresadoTres= document.getElementById('PrecioTres').value;
	precioIngresadoTres= parseInt(precioIngresadoTres);

	promedio= (precioIngresadoUno + precioIngresadoDos + precioIngresadoDos)/3

	alert("El promedio es " + promedio);


}
function PrecioFinal () 
{
	var precioIngresadoUno;
	var precioIngresadoDos;
	var precioIngresadoTres;
	var suma;
	var iva;
	var precioFinal;

	precioIngresadoUno= document.getElementById('PrecioUno').value;
	precioIngresadoUno= parseInt(precioIngresadoUno);
	precioIngresadoDos= document.getElementById('PrecioDos').value;
	precioIngresadoDos= parseInt(precioIngresadoDos);
	precioIngresadoTres= document.getElementById('PrecioTres').value;
	precioIngresadoTres= parseInt(precioIngresadoTres);

	suma= (precioIngresadoUno+ precioIngresadoDos + precioIngresadoTres);

	iva= (suma*21/100);

	precioFinal= suma + iva 

	alert("el precio final es " + precioFinal);





}