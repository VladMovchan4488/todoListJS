// THIS PIECE ABOUT SEARCH BY TITLE ON PAGE

document.querySelector('#liveSearch').oninput = function() {
	const val = this.value.trim(); // OUR INPUT VALUE
	const liveSearchItem = document.querySelectorAll('h4'); // TITLE VALUE
	if(val != '') { // IF NULL
		liveSearchItem.forEach(function(elem) {
			if(elem.innerText.search(val) == -1) { 
				elem.parentNode.style.display = 'none';
				elem.innerHTML = elem.innerText;
			}
			else { 
				elem.parentNode.style.display = 'block';
				let str = elem.innerText;
            elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
			}
		});
	}
	else {
		liveSearchItem.forEach(function(elem) {
			elem.parentNode.style.display = 'block';
			elem.innerHTML = elem.innerText;
		});
	}
}


// FUNCTION ABOUT MARK THE SAME LETTERS
function insertMark(string, pos, len) {
   // hello world
   // hello <mark>wo</mark>rld
   // hello+<mark>+wo+</mark>+rld
   return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}
