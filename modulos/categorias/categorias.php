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
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                            <p>Some text in the modal.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
