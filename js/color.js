var socket = io('http://radarvirus.com:3004');

  socket.on('color', function(data) {
    console.log(data);
});
