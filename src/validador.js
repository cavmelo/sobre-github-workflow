// Conjunto de REGEX para validação de entradas.

function validar_email(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validar_cep(cep) {
  const regex = /^\d{5}-\d{3}$/;
  return regex.test(cep);
}

function validar_cpf(cpf) {
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return regex.test(cpf);
}

function validar_telefone(telefone) {
  const regex = /^(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})$/;
  return regex.test(telefone);
}
