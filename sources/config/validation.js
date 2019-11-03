function validateTitle(title) {
	
	const isExist = todo.items.find(e => {
		return e.id == title.replace(/\s/g, '');
	});

	if(isExist) {
		alert("Hmm.. I don't be empty, first letters can be only (a-z/а-я) :( And don't wtite the same title please :)");
		document.querySelector('#title').value = 'LoL';
		document.querySelector('#description').value = '';
		document.querySelector('#selectvalue').value = 'high';
		return false;
	}

	if(title == "" || title >= 0 || title <= 0) {
		alert("Hmm.. I don't be empty, first letters can be only (a-z/а-я) :( And don't wtite the same title please :)");
		document.querySelector('#title').value = 'LoL';
		document.querySelector('#description').value = '';
		document.querySelector('#selectvalue').value = 'high';
		return false;
	}

	// if (! /^$/.test(title)) {
	// 	alert("Hmm.. I don't be empty, first letters can be only (a-z/а-я) :( And don't wtite the same title please :)");
	// 	document.querySelector('#title').value = 'LoL';
	// 	document.querySelector('#description').value = '';
	// 	document.querySelector('#selectvalue').value = 'high';
	// 	return false;
	// }	

	// if ( title.indexOf('') > -1 )  { alert( "found it" );  } 

	else 
	{
		return true;
	}

}