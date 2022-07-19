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

## Backend deploy link

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
# Authentication Routes:

- POST /sign-up
    - Route for the creation of new users (password must have a minimum length of 10 characters)
    - headers: {}
    - body: {
        "email": "email@email.com",
        "password": "somepassword"
    }
- POST /sign-in
    - Route where registred users can Login and receive an authentication Token throught the response body
    - headers: {}
    - body: {
        "email": "email@email.com",
        "password": "somepassword"
    }
    
# Credentials Routes:

- POST /create-credential
    - Route where the User registers a credential 
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
    - Route where the user gets on the response body all of its credentials  
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
- GET /credentials/:id
    - Route where the user gets on the response body a specific credential addressed by the "id" parameter
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
- DELETE /delete-credential/:id
    - Route where the user is able to delete a specific credential addressed by the "id" parameter
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
# Secured Noted Routes:

- POST /create-note
    - Route where the user can register an secure note. ("title" must have up to 50 char. "note"  must have up to 1000 char)
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {
        "title": "Some Title",
        "note": "Some Note"
    }
    
- GET /notes
    - Route where the user gets on the response body all of its secured notes    
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
- GET /notes/:id
    - Route where the user gets on the response body a specific secured note addressed by the "id" parameter
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
- DELETE /delete-note/:id
    - Route where the user is able to delete a specific secured note addressed by the "id" parameter
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
# Rotas de cartões:

- POST /create-card
    - Route where the user can register a card("type": "credit", "debit" or "credit and debit")
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
        "type": "credit and debit"
    }
    
- GET /cards
    - Route where the user gets on the response body all of its cards    
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
- GET /cards/:id
    - Route where the user gets on the response body a specific card addressed by the "id" parameter
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
- DELETE /delete-card/:id
    - Route where the user is able to delete a specific card addressed by the "id" parameter
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
# Wifi routes:

- POST /create-wifi
    - Route where the user can register a wi-fi network
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {
        "title": "Some Title",
        "name": "Some Name",
        "password": "somepassword"
    }
    
- GET /wifis
    - Route where the user gets on the response body all of its wi-fis    
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
- GET /wifis/:id
    - Route where the user gets on the response body a specific wi-fi addressed by the "id" parameter
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
    
- DELETE /delete-wifi/:id
    - Route where the user is able to delete a specific wi-fi addressed by the "id" parameter
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
```
