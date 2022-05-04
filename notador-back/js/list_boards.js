var {pythonshell, PythonShell} = require('python-shell');
var pyshell = new PythonShell('python/list.py', {mode: 'json'});

function List_boards() {

    pyshell.send("request names");

    pyshell.on('message', function(data){

        console.log("a");
    })
    
}
