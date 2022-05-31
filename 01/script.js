const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function ShowError(input,message){
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

function ShowSuccess(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function getFieldName(input){
	return input.id.charAt(0).toUpperCase() + input.id.slice(1,);
}

function checkRequired(inputArr){
	inputArr.forEach(function(input){
		if(input.value.trim() === ''){
			ShowError(input,`${getFieldName(input)} is required`);
		}
		else{
			ShowSuccess(input);
		}
	});
}

function checkLength(input, min, max){
	if(input.value.length < min){
		ShowError(input, `${getFieldName(input)} must be atleast ${min} characters long.`)
	}
	else if(input.value.length > max){
		ShowError(input,`${getFieldName(input)} must be within ${max} characters`);
	}
	else{
		ShowSuccess(input);
	}
}

function checkPasswordsMatch(input1, input2){
	if(input1.value === input2.value){
		ShowSuccess(input2);
	}
	else{
		ShowError(input2, `${getFieldName(input2)} should match Password`);
	}
}

form.addEventListener('submit',function(e){
	e.preventDefault();

	checkRequired([username,email,password,password2]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	checkPasswordsMatch(password,password2);


});