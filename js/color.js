var socket = io('https://wa.mydomotik.ml');

      socket.on('color', function(data) {
        index.html.querySelectorAll("#bg-primary").style.background = data;
            console.log(data);
      });
