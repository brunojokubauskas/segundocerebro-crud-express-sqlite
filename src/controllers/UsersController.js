const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");


class UsersController {
  async create(request, response){
    const {nome, email, password} =  request.body;
    const database = await sqliteConnection();
    const checkUsersExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if (checkUsersExists) {
      throw new AppError("Este e-mail já está em uso.");
    } 

    const hashedPassword  = await hash(password, 10);

    await database.run("INSERT INTO users (nome, email, password) VALUES (?, ?, ?)", [nome, email,  hashedPassword]);

    return response.status(201).json();
  }
}

module.exports = UsersController;