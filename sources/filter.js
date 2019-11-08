// THIS PIECE ABOUT FILTER OUR NOTATES BY PRIORITY AND STATUS TOGETHER

function allFilter() {
	const selectStatus = document.querySelector('#sortByStatus').value; // STATUS VALUE BY FORM [1]
	const selectPriority = document.querySelector('#sortByPriority').value; // PRIORITY VALUE BY FORM [2]
	let result = todo.items.filter(e => {
		if(selectStatus == 'all' || selectStatus == "") {
				return true;
			}		
			else {
				if(e.check == selectStatus) { // IF STATUS VALUE BY NOTATION == [1]
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
			if(e.selectvalue != selectPriority) { // IF PRIORITY VALUE BY NOTATION != [2]
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
