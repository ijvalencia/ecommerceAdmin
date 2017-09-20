<div class="content">
    <div class="container">
        <div class="row search-bar">
            <!--barra de busqueda-->
            <div class="col-sm-10">
                <input name="busqueda" id="entrada_busqueda" class="form-control search-input" aria-label="Search" placeholder="Buscar producto" minlength="1" maxlength="60" type="text">
                <button type="submit" class="btn btn-search" id="btn_buscar"><span class="fa fa-search"></span></button>
            </div>
            <div class="col-sm-2">
                <a class="btn btn-display-style" id="btn_cuadricula"><i class="fa fa-th"></i></a>
                <a class="btn btn-display-style" id="btn_lista"><i class="fa fa-th-list"></i></a>
            </div>
        </div>
    </div>
    <div>
        <!--Tabla resultados-->
        <lista>
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <div class="card">
                    <div class="content table-responsive table-full-width">
                        <table class="table table-hover table-striped">
                            <thead>
                                <th>Codigo fabricante</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
        </lista>
        <cuadricula class="container-fluid">
        </cuadricula>
        <!--Modal-->
        <div class="modal fade" id="datos_producto" role="dialog">
            <div class="modal-dialog modal-x">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="titulo_producto">Titulo</h4>
                        <p class="modal-description"></p>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Agregar imagen</label>
                                    <input type="text" class="form-control" placeholder="URL">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Cargar archivo</label>
                                    <input type="file" accept="image/*">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10">
                                <div class="form-group">
                                    <a class="btn btn-modal" data-dismiss="modal" id="borrar_imagen"><i class="fa fa-trash"></i><p>Borrar imagen</p></a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10">
                                <div class="form-group">
                                    <a class="btn btn-modal" data-dismiss="modal" id="excluir_producto"><i class="fa fa-ban"></i><p>Excluir producto</p></a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8"></div>
                            <div class="col-md-4">
                                <button type="button" class="btn btn-default" data-dismiss="modal" id="btn_confirmar">Aceptar</button>
                                <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Modal imagenes-->
        <div class="modal fade" id="datos_producto" role="dialog">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Borrar imagen</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12" id="selector_borrar">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8"></div>
                            <div class="col-md-4">
                                <button type="button" class="btn btn-default" data-dismiss="modal" id="btn_confirmar">Aceptar</button>
                                <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
