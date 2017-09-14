<?php
session_start();

include 'bd.php';
$conexion = new BD();
$opc = $_GET['opcion'];

switch ($opc) {
    case "estadoCategoria":
        $conexion->cambiar_estado_categoria($_GET['categoria']);
        break;
    case "borrarRelacionCategoria":
        $conexion->borrar_relacion($_GET['categoria'], $_GET['supercategoria']);
        break;
    case "copiarCategoria":
        $conexion->copiar_categoria($_GET['categoria'], $_GET['supercategoria']);
        break;
    case "moverCategoria":
        $conexion->mover_categoria($_GET['origen'], $_GET['destino'], $_GET['categoria']);
        break;
    case "buscarUsuario":
        $conexion->buscar_usuario($_GET['palabras']);
        break;
}

?>
