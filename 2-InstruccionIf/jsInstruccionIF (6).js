function mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;

    if(edad >= 13 && edad <= 17)
    {
        alert("es adolecente");
    }
    if(edad >= 18)
    {
        alert("es mayor de edad");
    }
    if(edad <13)
    {
        alert("es niño");
    }
}//FIN DE LA FUNCIÓN