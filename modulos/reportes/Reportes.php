<!DOCTYPE html>

<body style="width: 29px;">
<div class="container">
    <?php include '../../bin/head.php';?>
    <h2>Panel Heading</h2>
    <div class="panel panel-default">
        <div class="panel-heading">Panel Heading</div>
        <div class="panel-body">
            <h2>Modal Example</h2>
            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Gererar reporte</button>
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                            <p>Some text in the modal.</p>
                            <iframe frameborder="0" width="700" height="400"></iframe>
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
</body>
