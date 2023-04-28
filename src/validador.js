//   Conjunto de REGEX para validação de entradas.


function validar_email(email){
  // escreva seu código aqui
	var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(email.trim().toLowerCase());
 
}
  
function validar_cep(cep){
  // escreva seu código aqui
  var regex = /^[0-9]{2}\.[0-9]{3}-[0-9]{3}$/;
  return regex.test(cep.trim());

}

function validar_cpf(cpf){
  // escreva seu código aqui
  var regex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;
  return regex.test(cpf.trim())

}

function validar_telefone(telefone){
  // escreve seu código aqui
  var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
  return regex.test(telefone.trim());
}
