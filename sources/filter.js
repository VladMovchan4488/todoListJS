function allFilter() {
	const selectStatus = document.querySelector('#sortByStatus').value;
	const selectPriority = document.querySelector('#sortByPriority').value;
	let result = todo.items.filter(e => {
		if(selectStatus == 'all' || selectStatus == "") {
				return true;
			}		
			else {
				if(e.check == selectStatus) {
         		return false;
         	}
        		else {
        			return true;
        		}
        	}
	});

	result = result.filter(e => {
		if(selectPriority == 'all' || selectPriority == "") {
			return true;
		}		
		else {
			if(e.selectvalue != selectPriority) {
         	return false;
         }
        	else {
        		return true;
        	}
     	}
	});

	todo.items.forEach(e =>{
		document.querySelector(`#${e.id}`).style.display = 'none';
	})
	result.forEach(e =>{
		document.querySelector(`#${e.id}`).style.display = 'block';
	})
	
}