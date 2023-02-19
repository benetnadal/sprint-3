// Exercise 7


function validate() {

	var error = 0;

	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");

	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements

	var errorName = document.getElementById("errorName"); //This field is required and must have, at least, 3 characters
	var errorEmail = document.getElementById("errorEmail");
	
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email

	/**************************************** FUNCIÓ NOMÉS LLETRES ************************/

	function nomesLletres(string) {
		var x = false;
		var filtre = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
		var i = 0;
		console.log(filtre.indexOf(string.charAt(i)));

		while (!x && i < string.length) {

			if (filtre.indexOf(string.charAt(i)) >= 0) {
				i++;
			} else x = true;
		}
		return x;
	}

	/********************************************************************************************************* */

	/**************************************** FUNCIÓ NOMÉS NÚMEROS ************************/

	function nomesNumeros(string) {
		var x = false;
		var filtre = '0123456789';
		var i = 0;
		//console.log(filtre.indexOf(string.charAt(i)));
		while (!x && i < string.length) {

			if (filtre.indexOf(string.charAt(i)) >= 0) {
				i++;
			} else x = true;
		}
		return x;
	}

	/********************************************************************************************************* */



	/**************************************** FUNCIÓ LLETRES I NÚMEROS  ************************/

	function conteLletres(string) {

		var i = 0;
		var y = false;
		var filtre1 = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

		while (!y && i < string.length) {

			if (filtre1.indexOf(string.charAt(i)) < 0) {
				i++;
			} else y = true;
		}
		return y;
	}

	function conteNumeros(string) {

		var i = 0;
		var z = false;
		var filtre2 = '0123456789';

		while (!z && i < string.length) {

			if (filtre2.indexOf(string.charAt(i)) < 0) {
				i++;
			} else z = true;
		}
		return z;
	}

	/********************************************************************************************************* */

	/**************************************** FUNCIÓ MAIL  ************************/

	function mail(string) {
		var matriu = string.split('');
		var i = 0;
		var arroba = 0;

		for (i = 0; i < matriu.length; i++) {

			if (matriu[i] == "@") {
				arroba++;
			}
		}
		return arroba
	}

	/********************************************************************************************************* */


	// - Tots els camps són obligatoris:

	// - Tots els camps han de tenir almenys 3 caràcters:

	// - El nom i cognoms han de contenir només lletres:


	/****** Nom ********************/

	if (fName.value == "") {
		error++
		errorName.innerHTML = "This field is required";
		errorName.style.color = "red";
		errorName.style.fontSize = "larger";
		fName.style.border = "thick solid red";

	} else if (fName.value.length > 0 && fName.value.length < 3) {
		error++;
		errorName.innerHTML = "This field must have, at least, 3 characters";
		errorName.style.color = "red";
		errorName.style.fontSize = "larger";
		fName.style.border = "thick solid red";

	} else if ((nomesLletres(fName.value) == true)) {
		error++;
		errorName.innerHTML = "This field must contain only letters";
		errorName.style.color = "red";
		errorName.style.fontSize = "larger";
		fName.style.border = "thick solid red";

	} else {
		fName.style.border = "thick solid green";
		errorName.innerHTML = "";
	}

	/****** Cognom ********************/

	if (fLastN.value == "") {
		error++
		errorLastN.innerHTML = "This field is required";
		errorLastN.style.color = "red";
		errorLastN.style.fontSize = "larger";
		fLastN.style.border = "thick solid red";

	} else if (fLastN.value.length > 0 && fLastN.value.length < 3) {
		error++;
		errorLastN.innerHTML = "This field must have, at least, 3 characters";
		errorLastN.style.color = "red";
		errorLastN.style.fontSize = "larger";
		fLastN.style.border = "thick solid red";

	} else if ((nomesLletres(fLastN.value) == true)) {
		error++;
		errorLastN.innerHTML = "This field must contain only letters";
		errorLastN.style.color = "red";
		errorLastN.style.fontSize = "larger";
		fLastN.style.border = "thick solid red";

	} else {
		fLastN.style.border = "thick solid green";
		errorLastN.innerHTML = "";
	}


// - L'email ha de tenir format d'email:

if (fEmail.value == "") {
	error++;
	errorEmail.innerHTML = "This field is required";
	errorEmail.style.color = "red";
	errorEmail.style.fontSize = "larger";
	fEmail.style.border = "thick solid red";

} else if (fEmail.value.length > 0 && fEmail.value.length < 3) {
	error++;
	errorEmail.innerHTML = "This field must have, at least, 3 characters";
	errorEmail.style.color = "red";
	errorEmail.style.fontSize = "larger";
	fEmail.style.border = "thick solid red";

} else if (mail(fEmail.value) == 0) {
	error++
	errorEmail.innerHTML = "This field must contain an '@'";
	errorEmail.style.color = "red";
	errorEmail.style.fontSize = "larger";
	fEmail.style.border = "thick solid red";

} else if (mail(fEmail.value) > 0) {
	fEmail.style.border = "thick solid green";
	errorEmail.innerHTML = "";
}

// - La contrasenya ha d'incloure números i lletres:

if (fPassword.value == "") {
	errorPassword.innerHTML = "This field is required";
	errorPassword.style.color = "red";
	errorPassword.style.fontSize = "larger";
	fPassword.style.border = "thick solid red";

} else if (fPassword.value.length > 0 && fPassword.value.length < 3 || fPassword.value.length >8) {
	error++;
	errorPassword.innerHTML = "This field must have, at least, 3 char. and 8 char. max";
	errorPassword.style.color = "red";
	errorPassword.style.fontSize = "larger";
	fPassword.style.border = "thick solid red";

} else if (conteLletres(fPassword.value) == false || conteNumeros(fPassword.value) == false) {
	error++;
	errorPassword.innerHTML = "This field must contain letters and numbers";
	errorPassword.style.color = "red";
	errorPassword.style.fontSize = "larger";
	fPassword.style.border = "thick solid red";

} else {
	fPassword.style.border = "thick solid green";
	errorPassword.innerHTML = "";
}

// - Adreça:

	if (fAddress.value == "") {
		error++;
		errorAddress.innerHTML = "This field is required";
		errorAddress.style.color = "red";
		errorAddress.style.fontSize = "larger";
		fAddress.style.border = "thick solid red";

	} else if (fAddress.value.length > 0 && fAddress.value.length < 3) {
		error++;
		errorAddress.innerHTML = "This field must have, at least, 3 characters";
		errorAddress.style.color = "red";
		errorAddress.style.fontSize = "larger";
		fAddress.style.border = "thick solid red";

	}else {
		fAddress.style.border = "thick solid green";
		errorAddress.innerHTML = "";
	}

	// - El telèfon ha de contenir només números:

	if (fPhone.value == "") {
		error++;
		errorPhone.innerHTML = "This field is required";
		errorPhone.style.color = "red";
		errorPhone.style.fontSize = "larger";
		fPhone.style.border = "thick solid red";

	} else if (fPhone.value.length > 0 && fPhone.value.length < 9 || fPhone.value.length > 9) {
		error++;
		errorPhone.innerHTML = "This field must have 9 characters";
		errorPhone.style.color = "red";
		errorPhone.style.fontSize = "larger";
		fPhone.style.border = "thick solid red";

	} else if ((nomesNumeros(fPhone.value) == true)) {
		error++;
		errorPhone.innerHTML = "This field must contain only numbers with no spaces";
		errorPhone.style.color = "red";
		errorPhone.style.fontSize = "larger";
		fPhone.style.border = "thick solid red";

	} else {
		fPhone.style.border = "thick solid green";
		errorPhone.innerHTML = "";
	}

	//****************************************************************************************************** */

	if (error > 0) {
		return false;
	} else {
		return true;
	}
}