var recuadro = '<a class="populares supercategoria" id_super="#n" descripcion="#desc">#categoria</a>';
var row = '<tr id="#nombre"><td class="td-fixed">#nombre</td><td>#estado</td><td><a class="fa fa-plus"></a></td><td><a class="fa fa-folder"></a></td><td><a class="fa fa-trash"></a></td></tr>';

var objeto;

$.getJSON("../../../Ecommerce/bin/ingresar.php?categoria=getCategorias", 
    function(resp) {
        $.each(resp, function(i, categoria) {
            var aux = recuadro.replace("#n", categoria.id_super).replace("#categoria", categoria.nombre).replace("#desc", categoria.descripcion);
            $("#lista_supercategorias").append(aux);
        });
        $('.supercategoria').click(clickSupercategoria);
    }
);

function clickSupercategoria() {
    var valor = $(this).text();
    if (valor != "Todas")
        $('#tabla_estado').empty();
    else
        $('#tabla_estado').text("Estado");
    $('#titulo_subcat').empty().append(valor);
    $('#descripcion_subcat').empty().append($(this).attr("descripcion") == "null" ? "" : $(this).attr("descripcion"));
    var url = "../../../Ecommerce/bin/ingresar.php?categoria=";
    url += valor == "Todas" ? "getEstadoCategoria&subcategoria=666" : "getSubcategorias&subcategoria=" + $(this).text();
    // console.log(url);
    $.getJSON(url, function(resp) {
        $('tbody').empty();
        $.each(resp, function(i, categoria) {
            var aux = row.replace(/#nombre/g, valor == "Todas" ? categoria.nombre : categoria.id_categoria);
            aux = aux.replace(/#estado/g, valor == "Todas" ? (categoria.estado == "1" ? "Activa" : "Inactiva") : "");
            $('tbody').append(aux);
        });
        $('.fa').attr("data-toggle", "modal").attr("data-target", "#modal_categorias").click(clickIcono);
    });
}

function clickIcono() {
    objeto = $(this).parent().parent();
    var accion = $(this).attr("class");
    console.log(objeto.attr("id"));
    $('#accion_modal').text(accion.indexOf("plus") != -1 ? "copiar" : (accion.indexOf("folder") != -1 ? "mover" : "borrar"));
    // objeto.empty();
}

$('#modal_categorias').on("show.bs.modal", function() {
    var opc = $('#accion_modal').text();
    // console.log(opc);
    switch(opc) {
        case "copiar":
        case "mover":
            $('.modal-title').text(opc == "copiar" ? "Copiar subcategoria" : "Mover subcategoria");
            break;
        case "borrar":
            $('#select_modal_category').hide();
            $('.modal-title').text("Borrar");
            break;
    }
});
