var socket = io('https://wa.mydomotik.ml');

  socket.on('color', function(data) {
    console.log(data);
});
