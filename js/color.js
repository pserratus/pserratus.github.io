var socket = io('https://wa.mydomotik.ml');

      socket.on('color', function(data) {
        $(".bg-primary").css("background-color",data);
            console.log(data);
      });
