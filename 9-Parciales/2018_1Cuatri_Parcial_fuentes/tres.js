function mostrar()
{
	 var precio;
	 var descuento;
	 var precioFinal;

	 precio = prompt("ingrese un precio");
	 precio= parseInt(precio);
	 descuento= prompt("ingrese el porc entaje de descuento");
	 descuento = parseInt(descuento);

	precioFinal= precio - (precio*descuento/100)

	 document.getElementById('elPrecioFinal').value = precioFinal;

}
