function feedbackValidation() {
    // used to determine if the form data is submitted or not
    let validate = true
    // the div element where the error will appear at
    let feedbackErr = document.getElementById('feedback-err')
    feedbackErr.innerHTML = '';

    // array to hold the error messages, each field uses a specifec area of the array:
    // 0: name error msg
    // 1: phone error msg
    // 2: email error msg
    // 3: subject error msg
    // 4: topic error msg
    // 5: message error msg

    // array initialization
    let errorMsgs = [
        '',
        '',
        '',
        '',
        '',
        ''
    ]

    // validating the name field
    if (document.getElementById('name').value.search(/^[A-Za-z\-\._ ]{6,}$/) != 0) {
        validate = false;
        if (document.getElementById('name').value == '') {
            errorMsgs[0] = `Name cannot be empty, and must be more than 6 characters.`
        } else {
            errorMsgs[0] = `Name must be more than 6 characters.`
        }
    }

    // validating the phone field
    if ((document.getElementById('phone').value.search(/^(9665\d{8})$/) != 0) &&
        (document.getElementById('phone').value != '')) {
        validate = false;
        errorMsgs[1] = `Phone number can either be empty or must follow the format: 9665xxxxxxxx.`
    }

    // validating the email field
    // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // taken from https://stackoverflow.com/a/46181
    if (document.getElementById('email').value.search(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != 0) {
        validate = false;
        if (document.getElementById('email').value == '') {
            errorMsgs[2] = `Email cannot be empty, and must be a valid email address.`
        } else {
            errorMsgs[2] = `Email must be a valid email address.`
        }
    }

    // validating the subject field
    if (document.getElementById('subject').value == '') {
        validate = false;
        errorMsgs[3] = `Subject cannot be empty.`
    }

    // validating the topic field
    if (document.getElementById('topic').value == 'Please select the topic...') {
        validate = false;
        errorMsgs[4] = `A topic must be chosen.`
    }

    // validating the message field
    if (document.getElementById('message').value == '') {
        validate = false;
        errorMsgs[5] = `Message cannot be empty.`
    }

    // error msg handler
    if (validate) {
        feedbackErr.style.display = 'none'
        feedbackErr.innerHTML = ''
    } else {
        feedbackErr.style.display = 'inline'
        for (let i = 0; i < errorMsgs.length - 1; i++) {
            const element = errorMsgs[i];
            if (element != '') {
                feedbackErr.innerHTML += element + '<br/>'
            }
        }
        if (errorMsgs[5] != '') {
            feedbackErr.innerHTML += errorMsgs[5]
        }
    }

    return validate
}

function loginValidation() {
    // used to determine if the form data is submitted or not
    let validate = true

    let userErrorMsg = ''
    let passwordErrorMsg = ''

    // validating the username field
    if (document.getElementById('username').value.search(/^[A-Za-z0-9\-\._]{4,}$/) != 0) {
        validate = false;
        if (document.getElementById('username').value == '') {
            userErrorMsg = `Username cannot be empty, and must be more than 4 characters.`
        } else {
            userErrorMsg = `Username must be more than 4 characters.`
        }
    }
    // validating the password field
    if (document.getElementById('password').value.search(/^[A-Za-z0-9\-\._!@#\$%\^&\*]{6,}$/) != 0) {
        validate = false;
        if (document.getElementById('password').value == '') {
            passwordErrorMsg = `Password cannot be empty, and must be more than 6 characters.`
        } else {
            passwordErrorMsg = `Password must be more than 6 characters.`
        }
    }

    // error msg handling
    if (validate) {
        document.getElementById('login-err').style.display = 'none'
        document.getElementById('login-err').innerHTML = ''
    } else {
        document.getElementById('login-err').style.display = 'inline'
        if (userErrorMsg == '') {
            document.getElementById('login-err').innerHTML = passwordErrorMsg
        } else {
            document.getElementById('login-err').innerHTML = userErrorMsg + '<br/>' + passwordErrorMsg
        }
    }

    return validate
}

