$(document).ready(function() {
});

$('#btn_buscar').click(busqueda);

function busqueda() {
    var palabras = $('#entrada_busqueda').val().toUpperCase().trim().split(' ');
    console.log(palabras);
    $.ajax({
        url: "../../../Ecommerce/bin/ingresar.php?categoria=buscar",
        type: "POST",
        data: {"categoria":"Todo", "palabras":palabras},
        success: function(resp) {
            resp = JSON.parse(resp);
            console.log(resp);
        }
    });
}

$('#btn_lista').click(function() {
    console.log($(this).attr("id"));
    if($(this).attr("class").indexOf("pressed") == -1)
        $(this).attr("class", "btn btn-display-style btn-pressed");
    else
        $(this).attr("class", "btn btn-display-style");
    $('#btn_cuadricula').attr("class", "btn btn-display-style");
});

$('#btn_cuadricula').click(function() {
    console.log($(this).attr("id"));
    if($(this).attr("class").indexOf("pressed") == -1)
        $(this).attr("class", "btn btn-display-style btn-pressed");
    else
        $(this).attr("class", "btn btn-display-style");
    $('#btn_lista').attr("class", "btn btn-display-style");
});
