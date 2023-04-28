// Conjunto de REGEX para validação de entradas.

function validar_email(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function validar_cep(cep) {
  var regex = /^[0-9]{5}-[0-9]{3}$/;
  return regex.test(cep);
}

function validar_cpf(cpf) {
  var regex = /^(\d)\1{10}$/;
  return regex.test(cpf);
}

function validar_telefone(telefone){
  let regex = "^[0-9]{2}-([0-9]{8}|[0-9]{9})";
  if(regex.test(telefone)) {
    return true
  } else {
    return false
  }
}
