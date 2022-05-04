var {pythonshell, PythonShell} = require('python-shell');
var pyshell = new PythonShell('python/read.py', {mode: 'json'});

function Read_board(board_name) {

    
    pyshell.send({name: board_name,});

    pyshell.on('message', function(data){

        console.log(data);
    })
}
