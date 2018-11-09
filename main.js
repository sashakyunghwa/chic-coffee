$(document).ready(function() {
    var modal = document.getElementById('modal');
    var button = document.getElementById('button');
    var close = document.getElementById('close');

button.onclick = function() {
    var name = $('.input-name').val();
    var email = $('#email-input').val();
    var nameValid = null;
    var emailValid = null;
    var atSymbol = '@'; 

    if(name.length < 2 || name === '') {
        $('.input-name').popover('show');
        nameValid = false;
        console.log('name is invalid');
    } else {
        $('.student-icon').popover('hide');
        nameValid = true;
        console.log('name is valid');
    }

    if(email === '') {
        $('#email-input').popover('show');
        emailValid = false;
        console.log('email is really invalid');
    }

    for(var i = 0; i < email.length; i++) {
        if(atSymbol.indexOf(email.charAt(i)) != -1 && email.length > 6) {
            $('#email-input').popover('hide');
            emailValid = true;
            console.log('email is valid');
        } else if(atSymbol.indexOf(email.charAt(i)) != -1 && email.length < 6) {
            $('#email-input').popover('show');
            emailValid = false;
            console.log('email is invalid');
        } else {
            $('#email-input').popover('show');
            emailValid = false;
            console.log('email is hellllllla invalid');
        }
    } 
  
    if(nameValid == true && emailValid == true) {
        modal.style.display = 'block';
    }
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}

});


