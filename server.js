const io = require('socket.io')();
io.on('connection', (socket) => {
    console.log('Connected: ',socket.id);
    socket.on('gameTurn',(position,symbol)=>{
        socket.broadcast.emit('turn',socket.id,position,symbol);
    });
});
const port = 8000;
io.listen(port);
console.log('listening on port ', port);