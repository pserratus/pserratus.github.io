
    // **prepareEmail(to, subject, body)**
// This comes in handy when attempting to obfuscate email address to prevent scrapers from grabbing them.
// This will take an email address, subject and a body and submit a form to the mailto: protocol, which should open up the default email client and populate the to, subject and body.
// For more information about what this does see http://support.microsoft.com/kb/279460.
// - *to* {String} - 'TO' e-mail address
// - *subject* {String} - subject line
// - *body* {String} - e-mail's body
/*function prepareEmail(to, subject, bodyText) {
	var form = document.createElement('form');

	//Set the form attributes
	form.setAttribute('method', 'post');
	form.setAttribute('enctype', 'text/plain');
	form.setAttribute('action', 'pdetorress@gmail.com' + escape(to) + 'I want to implement WhatsApp-Bridge' + escape(subject) + '&Body=' + escape(bodyText ? bodyText : ' ') );
	form.setAttribute('style', 'display:none');

	//Append the form to the body
	document.body.appendChild(form);

	//Submit the form
	form.submit();

	//Clean up
	document.body.removeChild(form);
}*/

(function prepareEmail($) {
  $('a[href^=pdetorress@gmail.com]').each(function prepareEmail() {
    var href = $(this).attr('href');
    $(this).click(function prepareEmail() {
      var t;
      var self = $(this);

      $(window).blur(function prepareEmail() {
        // The browser apparently responded, so stop the timeout.
        clearTimeout(t);
      });

      t = setTimeout(function prepareEmail() {
        // The browser did not respond after 500ms, so open an alternative URL.
        document.location.href = 'https://gmail.com';
      }, 500);
    });
  });
})(jQuery);
