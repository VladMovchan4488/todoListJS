// THIS PIECE OF CODE I BINT MY BUTTONS TO SPECIFIC ACTIONS

document.querySelector('#add').onclick = function() {  // BUTTON "CREATE"
	document.querySelector(".container-wrapper").style.display = 'flex';
}

document.querySelector('#cancel').onclick = function() {  // BUTTON "CANCEL" IN RECORD FORM BY NOTATES [1]
	document.querySelector(".container-wrapper").style.display = 'none';
	document.querySelector('#title').value = '';
	document.querySelector('#description').value = '';
	document.querySelector('#selectvalue').value = 'high';
}

document.querySelector('#cancel_proto').onclick = function() {  // [1] BY "EDIT" NOTATES
	document.querySelector("#wrapper_proto").style.display = 'none';
}

document.querySelector('#message').onclick = function() {  // FOR MY SEARCH
	alert("Your search have liveSearch :)");
}

// FUNCTION WHEN I CLOSE MY MODAL PAGE ON "ESC"
// document.addEventListener('keypress', function (e) {
//    if(e.keyCode === 27) document.getElementById('wrapper').style.display = 'none';
// }); 
