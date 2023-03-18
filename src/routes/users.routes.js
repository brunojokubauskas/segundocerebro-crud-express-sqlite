const { Router }  = require('express');

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function MyMiddleWare(request, response, next){
  console.log("Você passou pelo Middleware!");
  if(! request.body.isAdmin){
    return response.json({message:  "user unauthorized"})
  }
  //Vai chamar a próxima função...
  next();
}


//Reservando o espaço da memória para a minha a classe "UsersController"
const usersController = new UsersController();

usersRoutes.post("/",MyMiddleWare,usersController.create );
//Exportando para quem quiser utilizar esse arquivo poder utilizar...
module.exports =  usersRoutes;
