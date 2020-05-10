//Selectors = must be exist in html file
const input = document.querySelector('input');
const enter = document.querySelector('body>button');
const ul = document.querySelector('ul');

//Events
enter.addEventListener('click',addTask);
input.addEventListener('keypress',addTask2);
ul.addEventListener('click',checkTrash)

function checkTrash(e){
	const item = e.target;
	if(item.className === 'check')
	{
		console.log("check");
	}
	else if (item.className === 'trash') {
		console.log("trash");
	}
}


function addTask(){
	if (input.value.length > 0) {
		//create todo DIV
	const todoDIV = document.createElement('div');
	todoDIV.classList.add("todo");
	//add li
	const li = document.createElement('li');
	li.textContent = input.value;
	todoDIV.appendChild(li);
	input.value = '';
	//add done button
	const doneButton = document.createElement('button');
	doneButton.innerHTML = `<i class="fas fa-check-circle"></i>`
	doneButton.classList.add('check');
	todoDIV.appendChild(doneButton);
	//add trash button
	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
	trashButton.classList.add('trash')
	todoDIV.appendChild(trashButton);
	//append todoDIV to ul
	ul.appendChild(todoDIV)
	}
	
}
function addTask2(e)
{
	if (e.keyCode === 13) {
		addTask();
	}
}

