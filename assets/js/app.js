window.onload = timeout;

function timeout () {
    window.setTimeout("redirect()",3000)
}

function redirect () {
    window.location = "home.html";
    return
}


var cargarPagina = function () {
    
}


$(document).ready(cargarPagina);