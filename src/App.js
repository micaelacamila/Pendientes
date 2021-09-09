const nombre = document.querySelector("#Nombre-tarea");
const categoria = document.querySelector("#categoria-input")
const form = document.querySelector("#tareas-form");

form.addEventListener("submit", event =>{
    event.preventDefault();
    alert("Registrando tarea "+nombre.value+ " "+ categoria.value);
    /*alert("Tarea ingresada: "+ nombre.value+ 
    "\nCategoría de la tarea: "+categoria.value);*/
    
    /*var precioTotal = cantidad.value * precio.value;
    var precioTotalConImpuesto = precioTotal + impuesto*precioTotal; 
    alert("Precio total: "+precioTotal+"\nPrecio total con impuesto: "+precioTotalConImpuesto);
    document.write("Prueba");*/
    
})
