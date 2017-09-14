var row = '<tr><td>#id</td><td>#nombre</td><td>#apellidos</td><td>#correo</td><td><i class="fa fa-pencil" value="#id" data-toggle="modal" data-target="#datos_usuario"></td></tr>';

var usuarios = [];

$('#entrada_busqueda').keyup(function(k) {
    k = k.which;
    if (k == 13)
        $('#btn_buscar').click();
});

$('#btn_buscar').click(function() {
    buscarUsuario($('#entrada_busqueda').val().trim().split(" "));
});

function buscarUsuario(palabras) {
    $.ajax({
        url: "../../bin/selector.php",
        type: "GET",
        data: {"opcion":"buscarUsuario", "palabras":palabras},
        success: function(resp) {
            $('tbody').empty();
            usuarios = JSON.parse(resp);
            $.each(usuarios, function(i, persona) {
                var fila = row.replace(/#id/g, persona.id_usuario);
                fila = fila.replace("#nombre", persona.nombre);
                fila = fila.replace("#apellidos", persona.apellidos);
                fila = fila.replace("#correo", persona.correo);
                $('tbody').append(fila);
            });
            $('.fa-pencil').click(editarUsuario);
        }
    });
}

function editarUsuario() {
    var id = $(this).attr("value");
    console.log(id);
    for(var i = 0; i < usuarios.length; i++)
        if (usuarios[i].id_usuario == id) {
            console.log(usuarios[i]);
            $.ajax({
                url: "",
                type: "GET",
                data: {},
                success: function(resp) {

                }
            });
            break;
        }
}
