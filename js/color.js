var socket = io('https://wa.mydomotik.ml');

      socket.on('color', function(data) {
        document.querySelectorAll(".download").bgprimary.background = data;
      });
