var recuadro = '<a class="populares supercategoria" id_super="#n" descripcion="#desc">#categoria</a>';
var row = '<tr id="#nombre"><td class="td-fixed">#nombre</td><td>#estado</td><td><a class="fa fa-plus"></a></td><td><a class="fa fa-folder"></a></td><td><a class="fa fa-trash"></a></td></tr>';

var objeto;
var accion;
var tabla_relacion_categorias = [];
var supercategoria = [];

$.getJSON("../../../Ecommerce/bin/ingresar.php?categoria=getCategorias", function(resp) {
    supercategoria = resp;
//    console.log(supercategoria);
    $.each(resp, function(i, categoria) {
        var aux = recuadro.replace("#n", categoria.id_super).replace("#categoria", categoria.nombre).replace("#desc", categoria.descripcion);
        $("#lista_supercategorias").append(aux);
    });
    $('.supercategoria').click(clickSupercategoria);
    getTablaRelacion();
});


function getTablaRelacion() {
    $.getJSON("../../../Ecommerce/bin/ingresar.php?categoria=getSubcategorias&subcategoria=666", function(resp) {
        tabla_relacion_categorias = resp;
//        console.log(tabla_relacion_categorias);
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
        resp.sort(function(a, b) {return ((a.nombre < b.nombre) ? -1 : ((a.nombre > b.nombre) ? 1 : 0));});
        $.each(resp, function(i, categoria) {
            var aux = row.replace(/#nombre/g, valor == "Todas" ? categoria.nombre : categoria.id_categoria);
            aux = aux.replace(/#estado/g, valor == "Todas" ? (categoria.estado == "1" ? "Activa" : "Inactiva") : "");
            aux = aux.replace("fa-trash", $('#titulo_subcat').text() == "Todas" ? (categoria.estado == "1" ? "fa-trash" : "fa-reply") : "fa-trash");
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
    var excluir = [];
    for (var i = 0; i < tabla_relacion_categorias.length; i++) {
        var fila = tabla_relacion_categorias[i];
        if (fila.id_categoria == objeto.attr("id")) {
                excluir.push(fila.id_supercategoria);
        }
    }
//    console.log(excluir);
    var aux_cat = supercategoria;
    for (var i = 0; i < excluir.length; i++) {
        for (var j = 0; j < aux_cat.length; j++)
            if (aux_cat[j].nombre == excluir[i]) {
                aux_cat.splice(j, 1);
                break;
            }
    }
    $.each(aux_cat, function(i, cat) {
        $('#select_modal_category').append('<option value="'+cat.nombre+'">'+cat.nombre+'</option>');
    });
    $('#txt_copiar_mover').text("A que categoria deseas "+accion+" "+objeto.attr("id"));
    $('#txt_borrar_categoria').empty().append($('#titulo_subcat').text() == "Todas" ? 'Seguro que desea desactivar/activar '+objeto.attr("id") : 'Seguro desea borrar '+objeto.attr("id")+' de '+$('#titulo_subcat').text());
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
    var supercategoria_select = $('#select_modal_category').val();
    var categoria_menu = objeto.attr("id");
    switch(accion) {
        case "copiar":
            $.ajax({
                url: "../../bin/selector.php",
                type: "GET",
                data: {"opcion":"copiarCategoria", "categoria":categoria_menu, "supercategoria":supercategoria_select},
                success: function(resp) {
                    alert("Copiada "+categoria_menu+" a "+supercategoria_select);
                }
            });
            break;
        case "mover":
            if($('#titulo_subcat').text() == "Todas") {
                $.ajax({
                    url: "../../bin/selector.php",
                    type: "GET",
                    data: {"opcion":"copiarCategoria", "categoria":categoria_menu, "supercategoria":supercategoria_select},
                    success: function(resp) {
                        alert("Movida "+categoria_menu+" a "+supercategoria_select);
                    }
                });
            } else {
                var txt_super = $('#titulo_subcat').text();
                $.ajax({
                    url: "../../bin/selector.php",
                    type: "GET",
                    data: {"opcion":"moverCategoria", "categoria":categoria_menu, "destino":supercategoria_select, "origen":txt_super},
                    success: function(resp) {
                        alert("Movida "+categoria_menu+" de "+$('#titulo_subcat').text()+" a "+supercategoria_select);
                        $.each($('.supercategoria'), function(i, btn_super) {
                            if(btn_super.text == txt_super) {
                                btn_super.click();
                                return;
                            }
                        });
                    }
                });
            }
            break;
        case "borrar":
            if ($('#titulo_subcat').text() == "Todas") {
                $.ajax({
                    url: "../../bin/selector.php",
                    type: "GET",
                    data: {"opcion":"estadoCategoria", "categoria":categoria_menu},
                    success: function(resp) {
                        var aux = objeto.children();
                        $(aux[1]).text($(aux[1]).text().indexOf("In") == -1 ? "Inactiva" : "Activa");
                        var aux_fa = $($(aux[4]).children());
                        aux_fa.attr("class", aux_fa.attr("class").indexOf("trash")== -1 ? "fa fa-trash" : "fa fa-reply");
                    }
                });
            } else {
                $.ajax({
                    url: "../../bin/selector.php",
                    type: "GET",
                    data: {"opcion":"borrarRelacionCategoria", "categoria":objeto.attr("id"), "supercategoria":$('#titulo_subcat').text()},
                    success: function(resp) {
                        var txt_super = $('#titulo_subcat').text();
                        $.each($('.supercategoria'), function(i, btn_super) {
                            if(btn_super.text == txt_super) {
                                btn_super.click();
                                return;
                            }
                        });
                    }
                });
            }
            break;
        default:
            alert(accion+" "+categoria_menu+" a "+supercategoria_select);
            break;
    }
});
