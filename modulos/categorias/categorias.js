var recuadro = '<a class="populares supercategoria" id_super="#n" descripcion="#desc">#categoria</a>';
var row = '<tr><td>#nombre</td><td></td><td><a class="fa fa-plus"></a></td><td><a class="fa fa-folder"></a></td><td><a class="fa fa-trash"></a></td></tr>';

$.getJSON("../../../Ecommerce/bin/ingresar.php?categoria=getCategorias", 
    function(resp) {
        $.each(resp, function(i, categoria) {
            var aux = recuadro.replace("#n", categoria.id_super).replace("#categoria", categoria.nombre).replace("#desc", categoria.descripcion);
            $("#lista_supercategorias").append(aux);
        });
        $('.supercategoria').click(function() {
            var valor = $(this).text();
            $('#titulo_subcat').empty().append(valor);
            $('#descripcion_subcat').empty().append($(this).attr("descripcion") == "null" ? "" : $(this).attr("descripcion"));
            var url = "../../../Ecommerce/bin/ingresar.php?categoria=";
            url += valor == "Todas" ? "getEstadoCategoria&subcategoria=666" : "getSubcategorias&subcategoria=" + $(this).text();
            // console.log(url);
            $.getJSON(url, function(resp) {
                $('tbody').empty();
                $.each(resp, function(i, categoria) {
                    var aux = row.replace(/#nombre/g, valor == "Todas" ? categoria.nombre : categoria.id_categoria);
                    $('tbody').append(aux);
                });
            });
        });
    }
);
