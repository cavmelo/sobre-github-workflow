import validador

email = "cavmelo@gmail.com"
cpf = '787.034.323-11'
cep = '69023-332'
telefone = '(92) 99523-1132'

print(validador.validar_cpf(email))
print(validador.validar_cpf(cpf))

print(validador.validar_email(email))
print(validador.validar_email(cpf))

print(validador.validar_cep(cep))
print(validador.validar_cep(cpf))

print(validador.validar_telefone(cep))
print(validador.validar_telefone(telefone))