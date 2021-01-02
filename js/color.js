var socket = io('https://wa.mydomotik.ml');

      socket.on('color', function(data) {
            console.log(data);
        //document.querySelectorAll("#bg-primary").style.background = data;
      });
