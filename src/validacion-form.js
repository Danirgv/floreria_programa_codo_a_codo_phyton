function valida_boton(){
    //valido el nombre
    if (document.fproductos.nombre.value.length<=2){
           alert("Tiene que escribir su nombre con al menos 2 caracteres")
           document.fproductos.nombre.focus()
           return 0;
    }
    //valido el apellido
    if (document.fproductos.apellido.value.length<=3){
        alert("Tiene que escribir su apellido con al menos 3 caracteres")
        document.fproductos.nombre.focus()
        return 0;
 }
 if (document.fproductos.dni.value.length<=7){
    alert("Debe ingresar un dni válido.")
    document.fproductos.dni.focus()
    return 0;
}

if (document.fproductos.correo.value.length<=5){
    alert("Debe ingresar un email.")
    document.fproductos.correo.focus()
    return 0;
}

//el formulario se envia
alert("Muchas gracias por enviar el formulario");
document.fproductos.submit();
}