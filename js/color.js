var socket = io('https://wa.mydomotik.ml');

      socket.on('color', function(data) {
        $("#download").css("background-color",data);
            console.log(data);
      });
