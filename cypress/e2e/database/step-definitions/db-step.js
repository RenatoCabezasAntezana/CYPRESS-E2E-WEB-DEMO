const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

import {
  mostrarDatos,
  validateConnectDB,
  validateSelect,
  insertDataIntoDatabase,
  selectById,
  deleteClient
} from "../page-database/db-page";

Given("I have access to the database", () => {
  validateConnectDB();
});

When("I run the query to display all clients", () => {
  mostrarDatos();
});

Then(
  "I should receive a list of customers with at least one customer in the table",
  () => {
    validateSelect();
  }
);

When(
  "I insert a new record into the clients table with the following data",
  (datatable) => {
    insertDataIntoDatabase(datatable);
  }
);

Then("check that the customer table contains the entered data", () => {
  mostrarDatos();
});

When("I run the query by id to show the data of a specific customer", () => {
  selectById();
});

When("I delete a record from the table",()=>{
  deleteClient()
})
Then("the record should be successfully deleted",()=>{
  
})