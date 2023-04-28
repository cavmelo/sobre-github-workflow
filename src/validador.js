//   Conjunto de REGEX para validação de entradas.

<<<<<<< HEAD
function validar_email(email)
{


=======

function validar_email(email){
  // escreva seu código aqui
	var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(email.trim().toLowerCase());
>>>>>>> validator-js
 
}
  
function validar_cep(cep){


}

function validar_cpf(cpf){


}

function validar_telefone(telefone){


}
