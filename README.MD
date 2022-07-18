<p align="center">
  <a href="https://github.com/$username-github/$nome-repositorio">
    <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f512.svg" alt="readme-logo" width="80" height="80">
  </a>

  <h3 align="center">
    DrivenPass
  </h3>
</p>

## Description

Esta é uma API de armazenamento e gerenciamento de senhas e informações confidenciais.

## Database deploy link

https://back-drivenpass.herokuapp.com/

## Usage

```bash
$ git clone https://github.com/matheuslnmoura/projeto19-drivenpass-back

$ cd projeto19-drivenpass

$ npm install

$ npm run dev
```

## API:

```
# Rotas de autenticação:

- POST /sign-up
    - Rota para cadastrar um usuário (Senha de no mínimo 10 caracteres)
    - headers: {}
    - body: {
        "email": "email@email.com",
        "password": "somepassword"
    }
- POST /sign-in
    - Rota para o usuário logar e receber um token através do corpo da resposta
    - headers: {}
    - body: {
        "email": "email@email.com",
        "password": "somepassword"
    }
    
# Rotas de credenciais:

- POST /create-credential
    - Rota para o usuário registrar uma credencial
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {
        "title": "Some title",
        "url": "http://www.someurl.com",
        "user": "Some User Name",
        "password": "somepassword"
    }
- GET /credentials
    - Rota para o usuário resgatar todas as suas credenciais criadas através do corpo da resposta
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- GET /credentials/:id
    - Rota para o usuário resgatar uma credencial específica informada pelo params "id" através do corpo da resposta
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- DELETE /delete-credential/:id
    - Rota para o usuário deletar uma credencial específica informada pelo params "id"
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
# Rotas de notas seguras:

- POST /create-note
    - Rota para o usuário registrar uma nota segura ("title" máx 50 char. e "note" máx 1000 char.)
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {
        "title": "Some Title",
        "note": "Some Note"
    }
- GET /notes
    - Rota para o usuário resgatar todas as suas notas seguras criadas através do corpo da resposta
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- GET /notes/:id
    - Rota para o usuário resgatar uma nota segura específica informada pelo params "id" através do corpo da resposta
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- DELETE /delete-note/:id
    - Rota para o usuário deletar uma nota segura específica informada pelo params "id"
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
# Rotas de cartões:

- POST /create-card
    - Rota para o usuário registrar um cartão ("type": credit, debit ou both)
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {
        "title": "Some Title",
        "cardNumber": "1234 1234 1234 1234",
        "cardholderName": "Some Name",
        "securityCode": "123",
        "expirationDate": "10/27",
        "password": "1234",
        "isVirtual": false,
        "type": "both"
    }
- GET /cards
    - Rota para o usuário resgatar todas os seus cartões criados através do corpo da resposta
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- GET /cards/:id
    - Rota para o usuário resgatar um cartão específico informado pelo params "id" através do corpo da resposta
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- DELETE /delete-card/:id
    - Rota para o usuário deletar um cartão específico informado pelo params "id"
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
# Rotas de wi-fi:

- POST /create-wifi
    - Rota para o usuário registrar uma wi-fi
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {
        "title": "Some Title",
        "name": "Some Name",
        "password": "somepassword"
    }
- GET /wifis
    - Rota para o usuário resgatar todas as suas wi-fis criadas através do corpo da resposta
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- GET /wifis/:id
    - Rota para o usuário resgatar uma wi-fi específica informada pelo params "id" através do corpo da resposta
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
- DELETE /delete-wifi/:id
    - Rota para o usuário deletar uma wi-fi específica informada pelo params "id"
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
```