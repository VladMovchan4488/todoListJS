function edit_item() {

  document.querySelector("#wrapper_proto").style.display = 'flex';
  const edit_item = this.parentNode.parentNode.parentNode.parentNode;
  let elementId = edit_item.getAttribute('id');
  
  document.getElementById('title_proto').value = edit_item.querySelector('.name_item').innerText; 
  document.getElementById('description_proto').value = edit_item.querySelector('.description_item').innerText; 
  document.getElementById('selectvalue_proto').value = edit_item.querySelector('.priority_item').innerText;

  document.getElementById('save_proto').onclick = function () {

  	var rwTitle = document.getElementById('title_proto').value;
  	edit_item.querySelector('.name_item').innerText = rwTitle; 

  	var rwDesc = document.getElementById('description_proto').value;
  	edit_item.querySelector('.description_item').innerText = rwDesc;

  	var rwSV = document.getElementById('selectvalue_proto').value;
  	edit_item.querySelector('.priority_item').innerText = rwSV;

  	document.querySelector("#wrapper_proto").style.display = 'none';

  	todo.items.forEach(e => {

  		if(elementId == e.id) {
  			e.title = document.getElementById('title_proto').value;
  			e.description = document.getElementById('description_proto').value;
  			e.selectvalue = document.getElementById('selectvalue_proto').value;
  		}

  	})
  	// toLocale();
  } 

}