$(document).ready(function () {

     "use strict";

     //-----  Functions  -----//
     function clearMessages() {
          console.log("inside clearMessages()");

          $("#status-msg").text("");
          $("#name-err").text("");
          $("#email-err").text("");
          $("#message-err").text("");
     } // end clear messages

     function isEmail(email) {
          var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          return regex.test(email);
     }

     //-----  Events  -----//
     $('#submit-btn').click(function () {

          console.log("inside submit-btn callback");

          var success = true; // assume success
          var name = $("#name").val();
          var email = $("#email").val();
          var message = $("#message").val();

          clearMessages(); // clear status messages

          if (name.length == 0) {
               success = false;
               $("#name-err").text("Name required.");
               console.log("name" + name + "is missing");
          }

          if (email.length == 0) {
               success = false;
               $("#email-err").text("Email required.");
          } else if (!isEmail(email)) {
               $("#email-err").text("Email format: example@gmail.com");
          }

          if (message.length == 0) {
               success = false;
               $("#message-err").text("Message required.");
          }

          if (success) {
               $("#status-msg").css("color", "green").text("Thank you");
          } else {
               $("#status-msg").css("color", "red").text("Please make corrections where indicated.");
          }

     }); // end submit-btn callback

}); // end document.ready()