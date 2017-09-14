<?php

class BD {
    protected $conexion;

    public function conectar() {
        $username = "desarrollo";
        $password = "Pa55w0rd!crm";

        $this->conexion = mysqli_connect("10.1.0.49", $username, $password, "ecommerce");
        /* Conectar a BD Local */
        // $this->conexion = mysqli_connect("localhost", "root", "", "ecommerce");

        if (mysqli_connect_errno($this->conexion)) {
            echo "Error al conectar con MySQL: " . mysqli_connect_error();
        }
    }

    // Procedimiento para cerrar conexion
    public function cerrar() {
        $this->conexion = NULL;
    }

    // Constructor Conecta a la BD
    function __construct() {
        $this->conectar();
    }

    // Destructor
    function __destruct() {
        $this->cerrar();
    }

    function cambiar_estado_categoria($categoria) {
        $sql = "UPDATE categoria SET estado = IF(estado = 1, 0, 1) WHERE nombre = '".$categoria."'";
        echo $this->conexion->query($sql) ? 1 : 0;
    }

    function borrar_relacion($categoria, $supercategoria) {
        $sql = "DELETE FROM relacion_categorias WHERE id_categoria = '".$categoria."' AND id_supercategoria = '".$supercategoria."'";
        echo $this->conexion->query($sql) ? 1 : 0;
    }

    function copiar_categoria($categoria, $supercategoria) {
        $sql = "INSERT INTO relacion_categorias (id_categoria, id_supercategoria) VALUES ('".$categoria."', '".$supercategoria."')";
        echo $this->conexion->query($sql) ? 1 : 0;
    }

    function mover_categoria($origen, $destino, $categoria) {
        $sql = "UPDATE relacion_categorias SET id_supercategoria = '".$destino."' WHERE id_categoria = '".$categoria."' AND id_supercategoria = '".$origen."'";
        echo $this->conexion->query($sql) ? 1 : 0;
    }

    function buscar_usuario($palabras) {
        $resultados = [];
        foreach($palabras as $str) {
           $aux = true;
           $sql = "SELECT id_usuario, nombre, apellidos, correo FROM usuario WHERE nombre LIKE '%".$str."%' OR apellidos LIKE '%".$str."%' OR correo LIKE '%".$str."%'";
            foreach($this->conexion->query($sql) as $row) {
                for($i = 0; $i < sizeof($resultados) && sizeof($resultados) > 0; $i++)
                    if($resultados[$i]["id_usuario"] == $row["id_usuario"]) {
                        $aux = false;
                        break;
                    }
                if ($aux)
                    array_push($resultados, $row);
            }
        }
        echo json_encode(sizeof($resultados) >= 1 ? $resultados : "{}");
    }

    function getUsuario($id) {
        $sql = "SELECT * FROM usuario WHERE id_usuario = "+$id;
        foreach($this->conexion->query($sql) as $row)
            echo json_encode($row);
    }
}

?>
