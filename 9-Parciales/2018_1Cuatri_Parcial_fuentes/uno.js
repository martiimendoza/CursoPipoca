
function mostrar()
{

	var ancho;
	var largo;
	var perimetro;

	ancho= prompt("ingrese el ancho de un triangulo.");
	ancho= parseInt(ancho);
	largo = prompt("ingrese el largo de un triangulo");
	largo= parseInt(largo);

	perimetro = ancho*2 + largo*2

	alert("el perimetro es " + perimetro);


}
