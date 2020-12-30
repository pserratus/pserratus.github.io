var socket = io('https://wa.mydomotik.ml');

      socket.on('color', function(data) {
        document.querySelectorAll("#download").style.background = data;
      });
