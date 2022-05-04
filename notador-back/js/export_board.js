var {pythonshell, PythonShell} = require('python-shell');
var pyshell = new PythonShell('python/export.py');

function Export_board(board_name) {

    pyshell.send(board_name);

    pyshell.on('message', function(data){

        console.log(data);
    })
}