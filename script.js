// Opens the timed enter email modal on the index page only

function index() {
    setTimeout(function () { 
        document.querySelector('#modal').style = 'display: block';
        document.querySelector('#modalContent').innerHTML = "<div onclick='closeModal()'>&times;</div><img src='images/thumbsup.png' /><p>Enter your fake email address to win fake money!</p><p><input type='text' id='inputEmail' /></p><p><input type='checkbox' name='checkbox' id='checkbox' /><label for='checkbox'>Agree to fake terms</label></p><p><button id='submit' type='submit' onclick='submitEmail()'>Enter Email</button></p>";
    }, 1200);
}

// Closes the modal

function closeModal() {
    document.querySelector('#modal').style = 'display: none';
}

// Variables declared to store email entered and be set in localstorage for second page

var userEmail;
var myName;

// Sets variable and storage. Also opens new page and closes modal on the same page

function submitEmail() {
    userEmail = document.querySelector('#inputEmail').value;
    console.log(userEmail);
    if ((document.querySelector('#checkbox').checked === true) && (userEmail != "")) {
        localStorage.setItem('username', userEmail);
        window.open('hacked.html');
        closeModal();
    }
}

// Loads variable onto second page

function loadUser() {
    myName = localStorage.getItem('username');
}

// Sets timed modal with text

function hackedYou() {
    setTimeout(function () {
        document.querySelector('#you').innerHTML = ('<p>You have been hacked ' + myName + '.<br>I will be stealing all of your fake money.</p>');
    }, 1000);

// Adds matrix nonsense to background

    setInterval(function () {
        document.querySelector('#hacked').innerHTML = document.querySelector('#hacked').innerHTML + '01011001 01101111 01110101 00100111 01110010 01100101 00100000 01101000 01100001 01100011 01101011 01100101 01100100 00100000 ';
    }, 333);
}