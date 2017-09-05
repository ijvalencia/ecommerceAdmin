<?php
session_start();

include 'bd.php';
$conexion = new BD();
$opc = $_GET['opcion'];

switch ($opc) {
    case "estadoCategoria":
        $conexion->cambiar_estado_categoria($_GET['categoria']);
        break;
}

?>
