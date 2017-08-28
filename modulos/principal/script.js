
$(document).ready( function() {
    $("#dashboard").click(function() {
        $('ttbody').empty();
        $.get('../dashboard/dashboard.php', function(resp) { 
            $('ttbody').append(resp);
        }, 'html');
    });
    $("#usuario").click(function() {
        $('ttbody').empty();
        $.get('../user.php', function(resp) { 
            $('ttbody').append(resp);
        }, 'html');
    });
    $("#categorias").click(function() {
        $('ttbody').empty();
        $.get('../categorias/categorias.php', function(resp) { 
            $('ttbody').append(resp);
            $.ajax({
                url: "../categorias/categorias.js", 
                dataType: "script",
                success: function() {
                    console.log("Cargado");
                }
            });
        }, 'html');
    });
    $("#prueba").click(function() {
        $('ttbody').empty();
        $.get('../table.php', function(resp) { 
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
