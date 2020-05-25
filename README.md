<h1>Be The Hero</h1>

<div align="center">
    <p>
        API para utilização nos projetos <a href="https://github.com/amandabezerra/be-the-hero-frontend)">Be The Hero - Frontend</a> e <a href="https://github.com/amandabezerra/be-the-hero-mobile)">Be The Hero - Mobile</a>.
    </p>
    <div>
        <a href="#tecnologias">Tecnologias</a>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <a href="#desenvolvimento">Desenvolvimento</a>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <a href="#testes">Testes</a>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <a href="#referencia">Referência</a>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <a href="#creditos">Créditos</a>
    </div>
</div>


<h2 id="tecnologias">Tecnologias</h2>

+ [Node.js](https://nodejs.org/)
+ [Express](https://expressjs.com/)


<h2 id="desenvolvimento">Desenvolvimento</h2>

```
$ npm install
```

```
$ npm start
```

<h2 id="testes">Testes</h2>

```
$ npm test
```


<h2 id="referencia">Referência API</h2>

URL base: http://localhost:3333

Funcionalidade        | Endpoint             | Body | Header | Método 
:--                   | :--                  | :--: | :--:   | :--:
Cadastrar uma ONG     | /ongs                | { "name": NAME, "email": EMAIL, "whatsapp": WHATSAPP, "city": CITY, "uf": UF } | - | POST
Listar ONGs           | /ongs                | - | - | GET
Cadastrar um Caso     | /incidents           | { "title": TITLE, "description": DESCRIPTION, "value": VALUE } | Authorization: ONG_ID | POST
Listar Casos          | /incidents           | - | - | GET
Excluir um Caso       | /incidents/CASO_ID   | - | Authorization: ONG_ID | DELETE 
Login                 | /sessions            | { "id": ONG_ID } | - | POST
Acessar perfil da ONG | /profile             | -    | Authorization: ONG_ID | GET


<h2 id="creditos">Créditos</h2>

Este projeto foi produzido a partir das aulas da Semana Omnistack 11 da [Rocketseat](https://rocketseat.com.br/).