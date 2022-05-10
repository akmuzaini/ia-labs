// used to validate the form for the POST/GET methods
// var valid = true;
// the form elements
let username = "username";

function validateForm() {
    let valid = true;
    if (document.getElementById(username).value.search(/^[A-Za-z'\-\._ ]{6,}$/) != 0) {
        validation(0,username);
        valid = false;
    } else {
        validation(1,username);
    }
    console.log(valid);
    return valid;
}

function validation(valid,element) {

    if (valid == 1) {
        document.getElementById(`${element}-err-msg`).style.display = 'none';
        document.getElementById(`${element}-err-icon`).src = './images/icons/valid.png';
    } else {
        document.getElementById(`${element}-err-msg`).style.display = 'inline';
        document.getElementById(`${element}-err-icon`).src = './images/icons/invalid.png';
    }
}


function cv() {
    validateForm();   
}