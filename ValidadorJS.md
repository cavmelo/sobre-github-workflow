function validarEmail(email) {
  /* Valida se o email é válido usando regex. */
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}


function validarCPF(cpf) {
  /* Valida se o CPF é válido usando regex. */
  const regex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
  return regex.test(cpf);
}


function validarTelefone(telefone) {
  /* Valida se o número de telefone é válido usando regex. */
  const regex = /^\+?\d{2}\s?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  return regex.test(telefone);
}


const emailValido = "exemplo@email.com";
const emailInvalido = "exemplo@.com";
const cpfValido = "123.456.789-10";
const cpfInvalido = "123.456.789/10";
const telefoneValido = "+55 (12) 3456-7890";
const telefoneInvalido = "12345";

console.log(validarEmail(emailValido));          // true
console.log(validarEmail(emailInvalido));        // false
console.log(validarCPF(cpfValido));              // true
console.log(validarCPF(cpfInvalido));            // false
console.log(validarTelefone(telefoneValido));    // true
console.log(validarTelefone(telefoneInvalido));  // false
