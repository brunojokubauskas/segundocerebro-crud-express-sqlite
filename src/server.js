require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const express = require("express");

const routes = require("./routes");
migrationsRun();

const app =  express(); 
app.use(express.json());

app.use(routes);
app.use((error, request, response, next) => { 
    if(AppError instanceof  AppError){
      return response.status(error.statusCode),json({
        status: "error",
        message: error.message
      });
    } 

    console.log(error);

    return response.status(500).json({
      status: "error",
      message:" Internal server error"
    });

});

const PORT = 3333;
//"APP" Fique observando a porta X. 
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
})  
