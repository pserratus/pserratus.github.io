var socket = io('https://wa.mydomotik.ml');

      socket.on('color', function(data) {
            consolge.log(data);
        //document.querySelectorAll("#bg-primary").style.background = data;
      });
