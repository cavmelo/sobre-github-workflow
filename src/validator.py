#Conjunto de REGEX para validação de entradas.

import re

def validar_email(email):
    regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')
    return regex.match(email.strip().toLower())

  
def  validar_cep(cep):
  # escreva seu código aqui
    regex = re.compile(r'(\d){5}(\d){3}')
    return regex.match(cep.strip())


def validar_cpf(cpf):
    # escreva seu código aqui
    regex = re.compile(r'^([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})$')
    return regex.match(cpf.strip())

def validar_telefone(telefone):
    # escreve seu código aqui
    regex = re.compile(r'^([0-9]{2,3})?(\([0-9]{2}\))([0-9]{4,5})([0-9]{4})$')
    return regex.match(telefone.strip())
