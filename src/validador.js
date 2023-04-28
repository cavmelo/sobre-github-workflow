// Conjunto de REGEX para validação de entradas.

function validar_email(email)
{
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
 
}
  
function validar_cep(cep){
  const regex = /^[0-9]{5}-?[0-9]{3}$/;
  return regex.test(cep);

}

function validar_cpf(cpf){
  const regex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
  return regex.test(cpf);
}

function validar_telefone(telefone){
  const regex = /^\+?\d{2}\s?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  return regex.test(telefone);

}
