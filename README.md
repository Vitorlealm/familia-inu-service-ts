# <p align = "center">​🐶​ Familia Inu ​🐶​</p>

<p align="center">
   <img src="https://drive.usercontent.google.com/download?id=1Mg-al7RfvzKu8OIxNf2ePu4EM-a0byfE&export=view&authuser=1" width="500" height="500" object-fit="cover"/>
</p>


##  :clipboard: Description

The main objective of this application is to develop a web platform that facilitates reservation management and
improve interaction with Inu Family customers. The platform will be designed to offer an experience
intuitive and accessible, encouraging customers to make reservations quickly and simply. Furthermore,
It aims to highlight the facilities and services offered, emphasizing the comfort and safety provided to
pets during your stay.
***

## :computer:	 Tecnolgy and Concepts 

- JWTs
- Bcrypt
- Node.js
- TypeScript
- PostgresSQL

***

## :rocket: Routes

### 👥 Users 

```yml
GET /user/profile (autentify)
    - Route to get personal info
    - headers: { "Authorization": `Bearer ${token}` }
    - body:{}
```

```yml
GET /clients (autentify)
    - Route to admin get all users info
    - headers: { "Authorization": `Bearer ${token}` }
    - body:{}
```
    
```yml 
POST /signup
    - Route to create acount on the plataform
    - headers: {}
    - body: {
        "email": "lorem@domain.com",
        "name": "lorem ipsum"
        "number": "123456789",
        "password": "**********"
    }
```

```yml 
POST /login
    - Route to make the login to acess the CRUD
    - headers: {}
    - body: {
        "email": "lorem@domain.com",
        "password": "**********"
    }
```

```yml 
PUT /user/edit (autentify)
    - Route to certify the user is logged to edit and acess sensitive CRUD info 
    - headers: {  "Authorization": `Bearer ${token}` }
    - body: {
        "email": "lorem@domain.com",
        "name": "lorem ipsum"
        "number": "123456789",
        "password": "**********"
    }
```

```yml 
DELETE /user/delete (autentify)
    - Route to delete your account
    - headers: {  "Authorization": `Bearer ${token}` }
    - body: {}
```

### 🐕 PETS 

```yml
GET /pet/:id (autentify)
    - Route to get an especific pet info 
    - headers: {}
    - body:{}
```
    
```yml
GET /pet/usuario/:id (autentify)
    - Route to get user petsr info
    - headers: {}
    - body:{}
```

```yml 
POST /pet
    - Route to register a pet on plataform
    - headers: {}
    - body: {
       "name": "lorem@"
       "type": "lorem";
       "breed": "lorem";
       "sex": "M" | "F";
       "userId": 1;
       "comment": "lorem ipsum ...";
    }
```

```yml 
PATCH /pet (autentify)
    - Route edit pet info
    - headers: {  "Authorization": `Bearer ${token}` }
    - body: {
       "name": "lorem@"
       "type": "lorem";
       "breed": "lorem";
       "sex": "M" | "F";
       "userId": 1;
       "comment": "lorem ipsum ...";
    }
```

```yml 
DELETE /pet/:id (autentify)
    - Route to delete a pet
    - headers: {  "Authorization": `Bearer ${token}` }
    - body: {}
```

### 🏡​ HOST 

```yml
GET /hospedagem/historico (autentify)
    - Route to admin get histotic of hosts  
    - headers: {  "Authorization": `Bearer ${token}` }
    - body:{}
```

```yml
GET /hospedagem/orcamento (autentify)
    - Route to user get price of hosts  
    - headers: {  "Authorization": `Bearer ${token}` }
    - body:{}
```
    
```yml
POST /hospedagem/agendamento (autentify)
    - Route to make a schedule
    - headers: {  "Authorization": `Bearer ${token}` }
    - body:{
        "beginDate": DATE,
        "finishDate": DATE,
        "petId": [1,2,3,4],
        "comment": "lorem ipsum"
      }
```

```yml
POST /hospedagem/confirmar/:id (autentify)
    - Route to admin to confirm host
    - headers: {  "Authorization": `Bearer ${token}` }
    - body:{}
```

```yml
POST /hospedagem/finalizar/:id (autentify)
    - Route to admin to finsh host
    - headers: {  "Authorization": `Bearer ${token}` }
    - body:{}
```

```yml
DELETE /hospedagem/cancelar/:id (autentify)
    - Route to admin/user cancel host
    - headers: {  "Authorization": `Bearer ${token}` }
    - body:{}
```

## 🏁 Running the application locally

First, make the clone repository in your machine:

```
git clone https://github.com/Vitorlealm/familia-inu-service-ts.git
```

After, inside the folder, run the comand to install the dependencies.

```
npm install
```
Config the .env, .env.test and .env.development based on .env.example

To finish the process, to init the server
```
npm run dev
```

:stop_sign: Don't forget to repeat the sequence above with [repository](https://github.com/yamashita-tiemi/Familia-Inu) that contains the interface of aplication, to test the project per complet.
