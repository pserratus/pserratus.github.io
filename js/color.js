var socket = io('http://wa.mydomotik.ml');

  socket.on('color', function(data) {
    console.log(data);
});
