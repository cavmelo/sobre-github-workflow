function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function validarCPF(cpf) {
  const regex = /^(\d{3}\.){2}\d{3}-\d{2}$/;
  return regex.test(cpf);
}
function validarTelefone(telefone) {
  const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  return regex.test(telefone);
}