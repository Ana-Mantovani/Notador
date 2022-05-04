var {pythonshell, PythonShell} = require('python-shell');
var pyshell = new PythonShell('python/del.py');

function Del_board(board_name) {

    pyshell.send(board_name);

    pyshell.on('message', function(data){

        console.log(data);
    })
}
