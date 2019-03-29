function checkUsername() {                            // Declare function
    var elMsg = document.getElementById('feedback'); // Get feedback element
    if (this.value.length < 6) {                     // If username too short
      elMsg.innerHTML = '<p><i class="fas fa-exclamation-triangle"></i> your username must be 6 characters or more</p>';  // Set msg
    } else {                                         // Otherwise
      elMsg.innerHTML = '';                             // Clear message
    }
  }
  var elUsername = document.getElementById('usernameinput'); // Get username input
  elUsername.onblur = checkUsername;// when it loses focus call cehckuserName();

var el = 0;
var username;
function toggleLogIn() {
    if (el == 0) {
        $('#question').hide();
        $('#google').hide();
        $("#signupbtt").hide();
        $("#signin").html("Sign in");
        $('#username').html("Username");
        $('#password').html("Password");
        $('#title').html("sign in");
        el = 1;
    } else if (el == 1) {
        $('#signup').hide();
        $('#title').html("welcome to muni studio !");
        $("#signin").html("Sign out");
        el = 2;
    } else {
        el = 0;
        $('#signup').show();
        $('#question').show();
        $('#google').show();
        $("#signupbtt").show();
        $("#signin").html("Sign in");
        $('#username').html("Create Username");
        $('#password').html("Create Password");
        $('#title').html("become a member and join our clay community !");
    }
}

window.onload = function() {
    firebase.auth().onAuthStateChanged(function(user) {
        var google = document.getElementById('google');
      if (user) {
        $('#signup').hide();
        $('#question').hide();
        $('#signin').hide();
        $('#google').html("Sign out");
        $('#title').html("welcome to muni studio<br/>thank your joining our membership !");
        initializeStreamListener();
      } else {
        $('#signup').show();
        $('#question').show();
        $('#signin').show();
        $('#google').html('<i class="fab fa-google-plus"></i> Sign in with Google');

        $('#title').html("become a member and join our clay community !");
      }
      $('#google').attr("disabled", false);
    });
};