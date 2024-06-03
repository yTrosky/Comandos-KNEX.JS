var db = require("./config");
const knex = require("./config");

// Bloco 1: DELETE
/*
knex.where({email: "jvlpark46@gmail.com"}) // Filtra registros onde o email é igual a "jvlpark46@gmail.com"
    .delete() // Deleta os registros filtrados
    .table("users") // Especifica a tabela "users"
    .then(data => { // Processa o resultado da operação
        console.log(data);
    })
    .catch(err => { // Captura e processa erros
        console.log(err);
    });
*/

// Bloco 2: UPDATE
/*
knex.where({email: "jvlpark46@gmail.com"}) // Filtra registros onde o email é igual a "jvlpark46@gmail.com"
    .update({role: 4, plan_id: 22}) // Atualiza os campos "role" para 4 e "plan_id" para 22
    .table("users") // Especifica a tabela "users"
    .then(data => { // Processa o resultado da operação
        console.log(data);
    })
    .catch(err => { // Captura e processa erros
        console.log(err);
    });
*/

// Bloco 3: SELECT
/*
knex.where({email: "jvlpark46@gmail.com"}) // Filtra registros onde o email é igual a "jvlpark46@gmail.com"
    .orWhere({id: 7}) // Adiciona uma condição OR onde o id é igual a 7
    .table("users") // Especifica a tabela "users"
    .then(data => { // Processa o resultado da operação
        console.log(data);
    })
    .catch(err => { // Captura e processa erros
        console.log(err);
    });
*/

// Bloco 4: SELECT com WHERE raw
/*
knex.whereRaw("email = 'jvlpark46@gmail.com' OR id = 7") // Usa uma condição WHERE raw onde o email é "jvlpark46@gmail.com" ou o id é 7
    .table("users") // Especifica a tabela "users"
    .then(data => { // Processa o resultado da operação
        console.log(data);
    })
    .catch(err => { // Captura e processa erros
        console.log(err);
    });
*/

// Bloco 5: SELECT
/*
knex.where({role: 2}) // Filtra registros onde o role é igual a 2
    .table("users") // Especifica a tabela "users"
    .then(data => { // Processa o resultado da operação
        console.log(data);
    })
    .catch(err => { // Captura e processa erros
        console.log(err);
    });
*/

// Bloco 6: INSERT
/*
var ddd = [ // Define um array de objetos contendo os dados a serem inseridos
    {
        name: "Victor",
        email: "jvlpark46@gmail.com",
        image_url: "",
        password: "2323",
        role: "2",
        plan_id: "2"
    },
    {
        name: "Victor",
        email: "jvlpark45@gmail.com",
        image_url: "",
        password: "2323",
        role: "2",
        plan_id: "2"
    },
    {
        name: "Victor",
        email: "jvlpark44@gmail.com",
        image_url: "",
        password: "2323",
        role: "2",
        plan_id: "2"
    },
]

knex.insert(ddd) // Insere os dados do array ddd
    .into('users') // Especifica a tabela "users"
    .then(data => { // Processa o resultado da operação
        console.log(data);
    })
    .catch(err => { // Captura e processa erros
        console.log(err);
    });
*/

// Bloco 7: SELECT
/*
knex.select() // Seleciona todos os campos
    .table("users") // Especifica a tabela "users"
    .then(dados => { // Processa o resultado da operação
        console.log(dados);
    })
    .catch(err => { // Captura e processa erros
        console.log(err);
    });
*/

// Bloco 8: SELECT RAW
/*
knex.raw("SELECT * from users") // Executa a consulta SQL raw
    .then(data => { // Processa o resultado da operação
        console.log(data);
    })
    .catch(err => { // Captura e processa erros
        console.log(err);
    });
*/

// Bloco 9: COUNT
/*
knex.where({id: 7}) // Filtra registros onde o id é igual a 7
    .count() // Conta os registros filtrados
    .table("users") // Especifica a tabela "users"
    .then(data => { // Processa o resultado da operação
        console.log(data);
    })
    .catch(err => { // Captura e processa erros
        console.log(err);
    });
*/

// Bloco 10: INSERT
/*
knex.insert({user_id: 7, description: "Mamateiro da UFERSA"}) // Insere um registro com user_id igual a 7 e description igual a "Mamateiro da UFERSA"
    .table("authors") // Especifica a tabela "authors"
    .then(data => { // Processa o resultado da operação
        console.log(data);
    })
    .catch(err => { // Captura e processa erros
        console.log(err);
    });
*/

// Bloco 11: INNER JOIN (esqueleto de código, não concluído)
/*
knex('users') // Seleciona a tabela "users"
    .join('contacts', 'users.id', '=', 'contacts.user_id') // Faz um join com a tabela "contacts" onde users.id é igual a contacts.user_id
    .select('users.id', 'contacts.phone') // Seleciona os campos users.id e contacts.phone
*/

// Bloco 12: INNER JOIN
/*
var query = knex.table("users") // Seleciona a tabela "users"
    .innerJoin("authors", "users.id", "authors.user_id") // Faz um join com a tabela "authors" onde users.id é igual a authors.user_id
    .then(data => { // Processa o resultado da operação
        console.log(data);
    })
    .then(err => { // Captura e processa erros
        console.log(err);
    });
*/

// Bloco 13: INNER JOIN com filtro
var query = knex.where({"users.id": 7}) // Filtra registros onde users.id é igual a 7
    .table("users") // Especifica a tabela "users"
    .innerJoin("authors", "users.id", "authors.user_id") // Faz um join com a tabela "authors" onde users.id é igual a authors.user_id
    .then(data => { // Processa o resultado da operação
        console.log(data);
    })
    .catch(err => { // Captura e processa erros
        console.log(err);
    });

// console.log(query.toSQL()); // Gera a query SQL sem executá-la



