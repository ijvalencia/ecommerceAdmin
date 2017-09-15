<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="header">
                        <h4 class="title">Categorias</h4>
                        <p class="category"></p>
                    </div>
                    <div class="content" id="lista_supercategorias">
                        <a class="populares supercategoria" id_super="666" descripcion="Aqui se muestran todas las subcategorias existentes, algunas pueden no estar relacionadas con ninguna categoria">Todas</a>
                    </div>
                </div>
                <div class="card">
                    <div class="header">
                        <h4 class="title">Solicitar categoria</h4>
                    </div>
                    <div class="content table-responsive table-full-width">
                        <div class="container-fluid">
                            <input type="text" class="form-control" placeholder="Nombre de la categoria*" maxlength="40" style="margin-bottom:10px;">
                            <input type="text" class="form-control" placeholder="Descripcion de la categoria" maxlength="200" style="margin-bottom:10px;">
                            <center><a class="btn btn-default">Enviar petición</a></center>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="header">
                        <h4 class="title" id="titulo_subcat">Subcategorias</h4>
                        <p class="category" id="descripcion_subcat"></p>
                    </div>
                    <div class="content table-responsive table-full-width">
                        <table class="table table-hover table-striped">
                            <thead>
                                <th>Subcategoria</th>
                                <th id="tabla_estado"></th>
                            	<th>Copiar</th>
                            	<th>Mover</th>
                            	<th>Borrar</th>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- Modal -->
            <div id="modal_categorias" class="modal fade" role="dialog">
                <span id="accion_modal" class="hidden"></span>
                <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h5 class="modal-title"></h5>
                        </div>
                        <div class="modal-body">
                            <span id="txt_borrar_categoria"></span>
                            <span id="txt_copiar_mover"></span>
                            <center><select id="select_modal_category"></select></center>
                        </div>
                        <div class="modal-footer">
                            <button id="btn_modal_aceptar" type="button" class="btn btn-default" data-dismiss="modal">Aceptar</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
