var resultados = [];
var codigo;

$(document).ready(function() {
    $('#btn_lista').click();
    $('cuadricula').hide();
});

$('#btn_buscar').click(busqueda);
$('#entrada_busqueda').keydown(function(e) {
    if(e.which == 13)
        busqueda();
});

function busqueda() {
    var palabras = $('#entrada_busqueda').val().toUpperCase().trim().split(' ');
//    console.log(palabras);
    $.ajax({
        url: "../../../Ecommerce/bin/ingresar.php?categoria=buscar",
        type: "POST",
        data: {"categoria":"Todo", "palabras":palabras},
        success: function(resp) {
            resultados = JSON.parse(resp);
            $('cuadricula').empty();
            $('tbody').empty();
            var img_cuadricula = '<div class="col-md-2"><a class="thumbnail" onclick="getId(/\#codigo/\)" data-toggle="modal" data-target="#datos_producto"><div><img src="#imagen" class="img-responsive" alt="Image" onerror="this.src=\'../../../Ecommerce/IMG/error.jpg\'"></div><p><hr><small>#descripcion</small></p><h5>$#costo</h5></a></div>';
            var div_cuadricula = '<div class="container-fluid bg-3 text-center">';
            var lista_producto = '<tr onclick="getId(/\#codigo/\)" data-toggle="modal" data-target="#datos_producto"><td>#codigo</td><td>#descripcion</td><td>#costo</td></tr>';
            /* Insertar en lista */
            $.each(resultados, function(i, producto) {
                $('tbody').append(lista_producto.replace(/#codigo/g, producto.codigo_fabricante).replace("#descripcion", producto.descripcion.substring(0, 60)).replace("#costo", "$"+producto.precio));
            });
            /* Insertar en cuadricula */
            var html_salida = "";
            $.each(resultados, function(i, producto) {
                if(i == 0 || i % 6 == 0)
                    html_salida += "</div>" + div_cuadricula;
                html_salida += img_cuadricula.replace(/#codigo/g, producto.codigo_fabricante).replace("#imagen", producto.imagen).replace("#descripcion", producto.descripcion.substring(0, 26)).replace("#costo", producto.precio);
            });
            html_salida += "</div>";
            $('cuadricula').append(html_salida);
        }
    });
}

$('#btn_lista').click(function() {
    $(this).attr("class", "btn btn-display-style btn-pressed");
    $('#btn_cuadricula').attr("class", "btn btn-display-style");
    $('lista').show();
    $('cuadricula').hide();
});

$('#btn_cuadricula').click(function() {
    $(this).attr("class", "btn btn-display-style btn-pressed");
    $('#btn_lista').attr("class", "btn btn-display-style");
    $('lista').hide();
    $('cuadricula').show();
});

function getId(codigo) {
    this.codigo = (codigo + "").substring(1, (codigo + "").length-1);
}

$('#datos_producto').on("show.bs.modal", function() {
    $.each(resultados, function(i, producto) {
        if(producto.codigo_fabricante == codigo) {
            $('#titulo_producto').text(codigo);
            $('.modal-description').text(producto.descripcion);
            return;
        }
    });
});

$('#borrar_imagen').click(function() {
    $.each(resultados, function(i, producto) {
        if(producto.codigo_fabricante == codigo) {
            console.log(producto);
        }
    });
});

$('#excluir_producto').click(function() {
    /* mandar peticion para excluir */
    console.log(codigo);
});

$('#btn_confirmar').click(function() {
    /* mandar imagen al servidor */
    console.log(codigo);
});

