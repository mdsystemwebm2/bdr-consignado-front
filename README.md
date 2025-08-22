# BDR Consignados API

- https://bdrconsignados.mdsw.shop/v1

## Endpoints

- /login (POST)
  Login usuarios

```JSON
{
  "email": "consignado01@admin.com",
  "password": "admin123"
}

```

- /register (POST)
  Registrando usuarios \ admin, vendedor, consignado

```JSON
{
  "name": "Consignado 01",
  "email": "consignado01@admin.com",
  "password": "admin123",
  "password_confirmation": "admin123",
  "cnpj_cpf": "05438070024",
  "phone": "47999887763",
  "address": "Rua Exemplo, 123",
  "type": "consignado",
  "responsible_id": 2
}

```

- /users/id (POST)
  Update usuarios

```JSON
{
  "name": "Consignado Testando",
  "email": "consignado01@admin.com"
}

```

- /users/id (PUT)
  Update usuarios

```JSON
{
  "name": "Consignado Testando",
  "email": "consignado01@admin.com"
}

```

- /users/id (DELETE)
  Deletando usuarios
