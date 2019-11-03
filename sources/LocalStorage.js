// function toLocale() {
// 	// byLocale()
// 	var serialObj = JSON.stringify(todo.items);
// 	localStorage.setItem("myKey", serialObj);
// }

// // function byLocale() {
// // 	var returnObj = [];
// // 	var myKeyObj = localStorage.getItem('myKey');
// // 	if(myKeyObj !== null){
// // 		returnObj = JSON.parse(myKeyObj);
// // 	}
// // 	return returnObj;
// // }

// window.onload = function() {

// 	var returnObj = JSON.parse(localStorage.getItem("myKey"));

// 	const list = document.querySelector('.list');
// 	returnObj.forEach(e => {
// 	const isExist = !!list.querySelector(`#${e.id}`);   
// 	if(isExist) { return; }             
// 	const item = document.createElement('div');
// 	item.className = 'item';
// 	item.id = e.id;
// 	item.innerHTML += `
// 		<input type='checkbox' class='checkBox' checked="checked" onchange="check_item_box(this)" ">
// 			<h4 class="name_item"> ${e.title} </h4>
// 				<p class="description_item"> ${e.description} </p>
// 					<div class="bottom">
// 						<p class="priority_item"> ${e.selectvalue} </p>
// 						<div class="dropdown">
// 							<button class="mainmenubtn">...</button>
// 							<div class="dropdown-child">
// 								<a class='checkButton' onclick='check_item(${e.id})'> ${e.check} </a>
// 							</div>
// 						</div>
//   					</div> `;
//   list.appendChild(item);

//   const dropdownList = item.querySelector('.dropdown-child');
//   const editButton = document.createElement('a');
//   editButton.setAttribute("type", "a");
//   editButton.className = "edit";
//   editButton.innerHTML = "edit";
//   editButton.addEventListener('click', edit_item);
//   dropdownList.appendChild(editButton);

//   const removeButton = document.createElement('a');
//   removeButton.setAttribute("type", "a");
//   removeButton.className = "delete";
//   removeButton.innerHTML = "delete";
//   removeButton.addEventListener('click', delete_item);
//   dropdownList.appendChild(removeButton);

// 	});
// }