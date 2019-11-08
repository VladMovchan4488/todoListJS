// THIS PIECE OF CODE ABOUT BUTTON "DONE/OPEN" + CHECKBOX

function check_item(item) {  

      const btn = item.querySelector('.checkButton');
		const checkBtn = item.querySelector('.checkBox');
		
		// CHANGE TEXT FOR BUTTON IN HTML [1]
		if (btn.innerHTML == "open") {			 
			btn.innerHTML = "done";    
			
			// CHANGE COLOR: BUTTON + THIS NOTATION [2]
			item.style.background = '#fff';
			btn.style.background = '#c0c0c0';
			checkBtn.style.display = 'none';
			
			// CHANGE TEXT FOR BUTTON IN JS [3]
			todo.items.forEach(e => { 
				if( e.id == item.getAttribute('id') ){
					e.check = "done";
				} 	
       	}); 	
       	allFilter(); // DINAMIC CALL TO FILTER, IF CHECKBOX == TRUE [4]
      }

  		else {
			btn.innerHTML = "open"; // [1]
			
			// [2]
			checkBtn.style.display = 'flex';
			item.style.background = '#c0c0c0';
			btn.style.background = '#fff';
			
			// [3]
			todo.items.forEach(e => {
				if( e.id == item.getAttribute('id') ){
					e.check = "open";
				}
       	});
       	allFilter(); // [4]
		}

}

// FUNCTION BY CHECKBOX CHANGE
function check_item_box(checkbox) {
	const item = checkbox.parentNode;
	const checkBtn = item.querySelector('.checkButton');
	
	item.style.background = '#fff';
	checkBtn.style.background = '#c0c0c0';
	checkbox.style.display = 'none';

	checkBtn.innerHTML = "done";

	todo.items.forEach(e => {
		if( e.id == item.getAttribute('id') ){
			e.check = "done";
			allFilter(); // [4]
		} 	
   }); 	

   checkbox.checked = 'checked'; // CHANGE STATUS CHECKBOX IN THE END OF FUNCTION
}
