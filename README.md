# todoList
Tech task, a todo-list application.

*					<--- ToDo List by Vlad Movchan version 1.0 --->
							     Reliz #1

*This TodoList is a mini program written in JavaScript / CSS / SASS / HTML.*

**        Specifics:**  
- note taking
- sorting by priority
- sort by status
- delete a note
- editing a note
- the status of the note
- search
- dynamic change of style

----------------------------------------------

**					Working with the program:**  

1) To run the program, you need to open the todo.html file - located in the root folder

2) The whole interface is as simple as possible to use.

3) To create a note, press the note button "create"
	- the "title" field is the title of your note, due to validation it cannot be blank / digit / one of the previous "title"
	- the description field for your note may be blank
	- you can then choose the importance of our note "high" / "normal" / "low"
	- "cencel" button - cancels the note creation
	- "save" button - creates notes in html and in our class

4) Night Theme / Day Theme button - toggles the program style

5) The search button searches our note for the specified "title" online (filter-independent)

6) Filters: (run depending on each other, synchronously)
	- note status "open" / "done" sorts our notes in the specified mode
	- the priority of "" high "/" normal "/" low "sorts our notes in the specified mode

7) Each note has a "..." button with three buttons:
	- "done" / "open" changes the status of the selected note (you can also change the status with the "checkbox" button)
	- "edit" - edits all fields of our note and overwrites
	- "delete" - removes our notes from html markup and class

----------------------------------------------

**  Structure:**  

Project/
|-- sources/
|   |-- config/
|   |    |-- bind.js
|   |    |-- validation.js
|   |    |-- configuration_style.js;
|   |
|   |-- dropdown_btn/
|   |    |-- check_item.js
|   |    |-- delete_item.js
|   |    |-- edit_item.js;
|   |
|   |-- filter.js
|   |-- LocalStorage.js
|   |-- search_script.js
|   |-- todo_class.js;
|
|-- styles/
|   |-- style.css
|   |-- style.sass
|   |-- img/
|	|-- search.png
|       |-- search.jpg
|       |-- background.jpg
|       |-- background_night.jpg;
|
|-- todo.html
|-- ReadMe.md

----------------------------------------------

**					Functionality:**  

*The ../sources folder contains files that provide program logic, such as:

1) The ../config folder for the application configuration contains:
	- ../validation.js - validation checks that our header is not the same, does not start with numbers and is not blank
	- ../bind.js function that gives instructions to buttons
	- ../configuration_style.js - dynamic style change implemented in a folder, the program currently has two styles (day / night)

2) Folder ../dropdown_btn change the status of the note (delete, status, edit):
	- ../check_item.js - Changes the status of a note (Done, not done)
	- ../delete_item.js - Deletes the current note in HTML and in the class itself
	- ../edit_item.js - editing notes in HTML and in the class itself


3) ../filter.js - contains two filters that work synchronously and are independent of each other:
	- ../filter.js - status filter - lets you filter status notes (done, not done)
	- ../filter.js - filter by priority - allows to filter notes by priority (high / low / normal)

4) ../search_script.js - works in online status and is not dependent on filters sorting by status and priority, search is only for "title" - as given in the condition

5) ../todo_class.js - a class of notes that creates notes in html markup

**6) ../LocalStorage.js - (TEST) file for local repository, works if commented while in test mode**

7) The ../styles folder contains images and style files for our application:
	- ../img - Includes search icons and a background image
	- ../styles.sass - preprocessor file for application styles
	- ../styles.css - an application style file converted from the previous one

8) The main project folder contains:
	- todo.html - markup in html of our page
	- ReadMe.md is the instruction

----------------------------------------------

**					Created with:**  
- JavaScript is a programming language for creating application logic
- HTML is a programming language for creating application markup
- SASS / CSS is a programming language for creating application styles
- Sublime Text Application Builder *
- Optional: HTML5, HTML6, CSS Flexbox, CSS Grid, Debugging, LocalStorage, GIT, GitHub.

**Version control: As this is not a relatively large project, I did not use any module bundler (ex. Webpack / Rollup / ..), plugged everything into an html file**

----------------------------------------------

**					Author:**  
 Movchan Vlad: 
- e-mail: movchan.vlad.tm61@gmail.com
- telephone: 0681990937

----------------------------------------------

**					Gratitude:**  

**I would like to thank "Cilkium" - for such a test task, if I do not take the courses, I would still be very grateful to you for such an interesting task, it was very interesting to program this application**

----------------------------------------------
