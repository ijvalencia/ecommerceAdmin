
$(document).ready( function() {
    $("#usuario").click(function() {
        $('ttbody').empty();
        $.get('../usuario/usuario.php', function(resp) {
            $('ttbody').append(resp);
            $.ajax({
                url: "../usuario/usuario.js",
                dataType: "script",
                success: function() {}
            });
        }, 'html');
    });
    $("#categorias").click(function() {
        $('ttbody').empty();
        $.get('../categorias/categorias.php', function(resp) { 
            $('ttbody').append(resp);
            $.ajax({
                url: "../categorias/categorias.js", 
                dataType: "script",
                success: function() {}
            });
        }, 'html');
    });
    $("#almacen").click(function() {
        $('ttbody').empty();
        $.get('../almacen/almacen.php', function(resp) {
            $('ttbody').append(resp);
            $.ajax({
                url: "../almacen/almacen.js",
                dataType: "script",
                success: function() {}
            });
        }, 'html');
    });
    $("#dashboard").click(function() {
        $('ttbody').empty();
        $.get('../dashboard/dashboard.php', function(resp) {
            $('ttbody').append(resp);
        }, 'html');
    });
    $("#reporte_pdf").click(function() {
        $('ttbody').empty();
        $.get('../reportes/Reportes.php', function(resp) {
            $('ttbody').append(resp);
        }, 'html');
    });
});
