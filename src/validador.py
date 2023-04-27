import re

def validar_email(email):
    regex = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
    return re.match(regex, email) is not None

def validar_cpf(cpf):
    regex = r'^\d{3}\.\d{3}\.\d{3}-\d{2}$'
    return re.match(regex, cpf) is not None

def validar_telefone(telefone):
    regex = r'^\(\d{2}\) \d{4,5}-\d{4}$'
    return re.match(regex, telefone) is not None
