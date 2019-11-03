class ToDo {
	list = [
		{id: "executetesttask", title: "execute test task", description: "Cilkum intership", selectvalue: "high", check: "done"},
		{id: "learnjavascript", title: "learn javascript", description: "", selectvalue: "low", check: "done"},
		{id: "applyintership", title: "apply intership", description: "send email", selectvalue: "normal", check: "done"},
		{id: "testforcilkum", title: "test for cilkum", description: "Thanks for this intersting task &#128522;", selectvalue: "high", check: "done"}
	];

	constructor(selector) {
		this.container = document.querySelector(selector);
		this.initHandlers();
		this.render();
	}

	initHandlers() {
		const btn = document.querySelector('#save');

		btn.addEventListener('click', () => { 
			const title = document.querySelector('#title').value;
			const description = document.querySelector('#description').value; 
			const selectvalue = document.querySelector('#selectvalue').value
			const check = document.querySelector('.checkButton');
			if(validateTitle(title)) 
			{ 	
				document.querySelector(".container-wrapper").style.display = 'none';
			   this.items = [
				   ...this.list,                                
				   {
					   id: title.replace(/\s/g, ''),
					   title: title,
					   description: description,
					   selectvalue: selectvalue,
					   check: 'done'
				   }
			   ];
			}
   		// toLocale();
		});

	}

	render() {

		const list = this.container.querySelector('.list');

		this.list.forEach(e => {

			const isExist = !!list.querySelector(`#${e.id}`);   
			if(isExist) 
			{
				return; 
			}                             

			const item = document.createElement('div');

			item.className = 'item';

			item.id = e.id;

			item.innerHTML = `
					<input type='checkbox' class='checkBox' checked="checked" onchange="check_item_box(this)" ">
					<h4 class="name_item"> ${e.title} </h4>
					<p class="description_item"> ${e.description} </p>
					<div class="bottom">
						<p class="priority_item"> ${e.selectvalue} </p>
						<div class="dropdown">
  							<button class="mainmenubtn">...</button>
  							<div class="dropdown-child">
  								<a class='checkButton' onclick='check_item(${e.id})'> ${e.check} </a>
  						</div>
					</div>
	   	</div>`;
         
			list.appendChild(item);

			const dropdownList = item.querySelector('.dropdown-child');

			const editButton = document.createElement('a');
			editButton.setAttribute("type", "a");
 			editButton.className = "edit";
  			editButton.innerHTML = "edit";
  			editButton.addEventListener('click', edit_item);
  			dropdownList.appendChild(editButton);

			const removeButton = document.createElement('a');
			removeButton.setAttribute("type", "a");
 			removeButton.className = "delete";
  			removeButton.innerHTML = "delete";
  			removeButton.addEventListener('click', delete_item);
  			dropdownList.appendChild(removeButton);

		});
			
		document.querySelector('#title').value = '';
		document.querySelector('#description').value = '';
		document.querySelector('#selectvalue').value = 'high';
	}

	get items() {
		return this.list;
	}

	set items(newList) {
		this.list = newList;
		this.render();
	}
}

const todo = new ToDo('.container3');