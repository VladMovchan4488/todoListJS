function check_item(item) {  

      const btn = item.querySelector('.checkButton');
		const checkBtn = item.querySelector('.checkBox');

		if (btn.innerHTML == "open") {			 
			btn.innerHTML = "done";    

			item.style.background = '#fff';
			btn.style.background = '#c0c0c0';
			checkBtn.style.display = 'none';

			todo.items.forEach(e => {
				if( e.id == item.getAttribute('id') ){
					e.check = "done";
				} 	
       	}); 	
       	allFilter();
      }

  		else {
			btn.innerHTML = "open"; 

			checkBtn.style.display = 'flex';
			item.style.background = '#c0c0c0';
			btn.style.background = '#fff';

			todo.items.forEach(e => {
				if( e.id == item.getAttribute('id') ){
					e.check = "open";
				}
       	});
       	allFilter();
		}

}


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
			allFilter();
		} 	
   }); 	

   checkbox.checked = 'checked';
}