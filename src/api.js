import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');
function sendTurn(position,symbol) {
    socket.emit('gameTurn', position,symbol);
}
function recieveTurn(cb){
    console.log('sending turn')
    socket.on('turn', (id,position,symbol) => {
        console.log(id,position,symbol)
        cb(id,position,symbol)}
    );
}
export { sendTurn,recieveTurn };