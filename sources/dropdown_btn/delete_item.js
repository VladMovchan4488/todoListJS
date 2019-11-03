// This function remove item in HTML/CLASS/LOCAL STORAGE
function delete_item() {
	const delete_item = this.parentNode.parentNode.parentNode.parentNode.getAttribute("id"); // bad solutions
	this.parentNode.parentNode.parentNode.parentNode.remove();
	todo.items.forEach(function(item, index, object) {
      if (item.id == delete_item) {
         object.splice(index, 1);
      }
   });
   // var serialObj = JSON.stringify(todo.items);   // toLocal (the same)
	// localStorage.setItem("myKey", serialObj);    // 
}