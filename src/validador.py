# Conjunto de REGEX para validação de entradas.
import re

def validar_email(email):
  regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')

  return re.match(regex,email,flags=0)  
  
def validar_cep(cep):
  # escreva seu código aqui
  return re.match('([0-9]{5}[-]?[0-9]{3})',cep)
  
def validar_cpf(cpf):
  # escreva seu código aqui
  
  return re.match('([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})',cpf,flags=0) 
  
def validar_telefone(telefone):
  regex = re.compile(r'^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$')
  # escreve seu código aqui
  return re.match(regex,telefone)
 
  
