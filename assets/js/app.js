// build a function that loops thru the object and builds all the modals needed
//
$(document).ready(function () {

  // Form Validation

  const form = document.getElementById('form');

  form.setAttribute('action', '//formspree.io/' + 'jtwilliams87' + '@' + 'gmail' + '.' + 'com');

  $("#form").submit(function (e) {
    e.preventDefault();
    
    const name = $("#name").val();
    const email = $("#user_email").val();
    const message = $("#message").val();

    $(".error").remove();

   
    if (name.length < 1) {
      $("#name").after('<span class="error">This field is required</span>');
    }

    if (email.length < 1) {
      $("#user_email").after('<span class="error">This field is required</span>');
    } else {
      const regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      const validEmail = regEx.test(email);
      if (!validEmail) {
        $("#email").after('<span class="error">Enter a valid email</span>');
      }
    }

    if (message.length < 8) {
      $("#message").after(
        '<span class="error">Message must be at least 8 characters</span>'
      );
    }
  });


});