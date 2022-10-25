function valida_envia(){
    //valido el nombre
    if (document.fvalida.nombre.value.length<=2){
           alert("Tiene que escribir su nombre con al menos 2 caracteres")
           document.fvalida.nombre.focus()
           return 0;
    }
    //valido el apellido
    if (document.fvalida.apellido.value.length<=3){
        alert("Tiene que escribir su apellido con al menos 3 caracteres")
        document.fvalida.nombre.focus()
        return 0;
 }
 if (document.fvalida.interes.selectedIndex==0){
    alert("Debe seleccionar un motivo de su contacto.")
    document.fvalida.interes.focus()
    return 0;
}

if (document.fvalida.consulta.value.length<=10){
    alert("Debe completar su consulta.")
    document.fvalida.interes.focus()
    return 0;
}
//el formulario se envia
alert("Muchas gracias por enviar el formulario");
document.fvalida.submit();
}