document.querySelector('#add').onclick = function() {
	document.querySelector(".container-wrapper").style.display = 'flex';
}

document.querySelector('#cancel').onclick = function() {
	document.querySelector(".container-wrapper").style.display = 'none';
	document.querySelector('#title').value = '';
	document.querySelector('#description').value = '';
	document.querySelector('#selectvalue').value = 'high';
}

document.querySelector('#cancel_proto').onclick = function() {
	document.querySelector("#wrapper_proto").style.display = 'none';
}

document.querySelector('#message').onclick = function() {
	alert("Your search have liveSearch :)");
}

// document.addEventListener('keypress', function (e) {
//    if(e.keyCode === 27) document.getElementById('wrapper').style.display = 'none';
// }); 