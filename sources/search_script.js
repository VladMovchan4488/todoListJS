document.querySelector('#liveSearch').oninput = function() {
	const val = this.value.trim();
	const liveSearchItem = document.querySelectorAll('h4');
	if(val != '') {
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


function insertMark(string, pos, len) {
   // hello world
   // hello <mark>wo</mark>rld
   // hello+<mark>+wo+</mark>+rld
   return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}