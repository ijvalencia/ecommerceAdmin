var recuadro = '<a class="populares supercategoria" id_super="#n" descripcion="#desc">#categoria</a>';
var row = '<tr id="#nombre"><td class="td-fixed">#nombre</td><td>#estado</td><td><a class="fa fa-plus"></a></td><td><a class="fa fa-folder"></a></td><td><a class="fa fa-trash"></a></td></tr>';

var objeto;
var accion;
var tabla_relacion_categorias = [];

$.getJSON("../../../Ecommerce/bin/ingresar.php?categoria=getCategorias", 
    function(resp) {
        $.each(resp, function(i, categoria) {
            var aux = recuadro.replace("#n", categoria.id_super).replace("#categoria", categoria.nombre).replace("#desc", categoria.descripcion);
            $("#lista_supercategorias").append(aux);
        });
        $('.supercategoria').click(clickSupercategoria);
        getTablaRelacion();
    }
);


function getTablaRelacion() {
    $.getJSON("../../../Ecommerce/bin/ingresar.php?categoria=getSubcategorias&subcategoria=666", function(resp) {
        tabla_relacion_categorias = resp;
        console.log(tabla_relacion_categorias);
    });
}

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
    accion = $(this).attr("class");
    // console.log(objeto.attr("id"));
    accion = accion.indexOf("plus") != -1 ? "copiar" : (accion.indexOf("folder") != -1 ? "mover" : "borrar");
    $('#accion_modal').text(accion);
    $('#select_modal_category').empty();
    for (var i = 0; i < tabla_relacion_categorias.length; i++) {
        var fila = tabla_relacion_categorias[i];
        if(fila.id_categoria != objeto.attr("id") && fila.id_supercategoria != $('#titulo_subcat').text())
            if (i == 0 || fila.id_supercategoria != tabla_relacion_categorias[i-1].id_supercategoria)
                $('#select_modal_category').append('<option value="'+fila.id_supercategoria+'">'+fila.id_supercategoria+'</option>');
    }
    $('#txt_copiar_mover').text("A que categoria deseas "+accion+" "+objeto.attr("id"));
    $('#txt_borrar_categoria').empty().append($('#titulo_subcat').text() == "Todas" ? 'Seguro que desea desactivar '+objeto.attr("id") : 'Seguro desea borrar '+objeto.attr("id")+' de '+$('#titulo_subcat').text());
    // objeto.empty();
}

$('#modal_categorias').on("show.bs.modal", function() {
    var opc = $('#accion_modal').text();
    // console.log(opc);
    switch(opc) {
        case "copiar":
        case "mover":
            $('#select_modal_category').show();
            $('#txt_copiar_mover').show();
            $('#txt_borrar_categoria').hide();
            $('.modal-title').text(opc == "copiar" ? "Copiar subcategoria" : "Mover subcategoria");
            break;
        case "borrar":
            $('#select_modal_category').hide();
            $('#txt_copiar_mover').hide();
            $('#txt_borrar_categoria').show();
            $('.modal-title').text("Borrar");
            break;
    }
});

$('#btn_modal_aceptar').click(function() {
    alert(accion +" "+ objeto.attr("id")+" a "+$('#select_modal_category').val());
});
