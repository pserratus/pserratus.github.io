var socket = io('https://wa.mydomotik.ml');

  socket.on('color', function(data) {
    document.body.bg-primary.background = data;
});
