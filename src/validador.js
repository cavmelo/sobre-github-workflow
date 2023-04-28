// Conjunto de REGEX para validação de entradas.

function validar_email(email) {
  let validarRegExNoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(validarRegExNoEmail)) {
    return true;
  } else {
    return false;
  }

}

function validar_cep(cep) {
  let regex = /^[0-9]{5}-[0-9]{3}$/;
  if (regex.test(cep)) {
    return true;
  } else {
    return false
  }
}

function validar_cpf(cpf) {
  let regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  if (regex.test(cpf)) {
    return true;
  } else {
    return false;
  }

}

function validar_telefone(telefone) {
  let regex = "^[0-9]{2}-([0-9]{8}|[0-9]{9})";
  if (regex.test(telefone)) {
    return true
  } else {
    return false
  }
}
