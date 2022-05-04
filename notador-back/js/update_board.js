var {pythonshell, PythonShell} = require('python-shell');
var pyshell = new PythonShell('python/update.py', {mode: 'json'});

function Update_board(board_name, obj) {

    pyshell.send({name: board_name, content: obj});

    pyshell.on('message', function(data){

        console.log(data.answer);
    })
}