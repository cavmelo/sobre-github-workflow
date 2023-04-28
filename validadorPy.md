import re

def validar_email(email):
    """Valida se o email é válido usando regex."""
    regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    if re.match(regex, email):
        return True
    else:
        return False

import re

def validar_cpf(cpf):
    """Valida se o CPF é válido usando regex."""
    regex = r'^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$'
    if re.match(regex, cpf):
        return True
    else:
        return False


import re

def validar_telefone(telefone):
    """Valida se o número de telefone é válido usando regex."""
    regex = r'^\+?\d{2}\s?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$'
    if re.match(regex, telefone):
        return True
    else:
        return False

email_valido = "exemplo@email.com"
email_invalido = "exemplo@.com"
cpf_valido = "123.456.789-10"
cpf_invalido = "123.456.789/10"
telefone_valido = "+55 (12) 3456-7890"
telefone_invalido = "12345"

print(validar_email(email_valido))          # True
print(validar_email(email_invalido))        # False
print(validar_cpf(cpf_valido))              # True
print(validar_cpf(cpf_invalido))            # False
print(validar_telefone(telefone_valido))    # True
print(validar_telefone(telefone_invalido))  # False
