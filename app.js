//add a to do

const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = (newTodo) => {
	const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${newTodo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;

	list.innerHTML += html;
};

addForm.addEventListener("submit", (evt) => {
	evt.preventDefault();

	const newTodo = addForm.add.value.trim();
	console.log(newTodo);

	if (newTodo.length) {
		generateTemplate(newTodo);
		addForm.reset();
	}
});

//delete a todo

list.addEventListener("click", (evt) => {
	if (evt.target.classList.contains("delete")) {
		console.log(evt.target);
		console.log(evt.target.parentElement);
		evt.target.parentElement.remove();
	}
});

const search = document.querySelector(".search input");

const filterTodos = (term) => {
	Array.from(list.children)
		.filter((li) => !li.textContent.toLowerCase().includes(term))
		.forEach((li) => li.classList.add("hidden"));

	Array.from(list.children)
		.filter((li) => li.textContent.toLowerCase().includes(term))
		.forEach((li) => li.classList.remove("hidden"));
};

search.addEventListener("keyup", (evt) => {
	// console.log(evt.target.value)
	const term = evt.target.value.trim().toLowerCase();
	// console.log(term);
	filterTodos(term);
});
