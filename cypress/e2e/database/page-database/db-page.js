import {
  getClients,
  validateDB,
  validateSelectDB,
  generateInsertSQL,
  getClientForId,
  deleteClients,
  getAllClients
} from "../querys/querys-db";
import { config } from "../config";

export const mostrarDatos = () => {
  cy.task("DATABASE", {
    dbConfig: config,
    sql: getClients(),
  }).then((result) => {
    cy.log(result.rows);
    result.rows.forEach((row) => {
      cy.log(JSON.stringify(row));
    });
  });
};

export const validateConnectDB = () => {
  cy.task("DATABASE", {
    dbConfig: config,
    sql: validateDB(),
  }).then((result) => {
    cy.log(result.rows);
    result.rows.forEach((row) => {
      cy.log(JSON.stringify(row));
    });
  });
};

export const validateSelect = () => {
  cy.task("DATABASE", {
    dbConfig: config,
    sql: validateSelectDB(),
  }).then((result) => {
    result.rows.forEach((row) => {
      cy.log(JSON.stringify(row));
    });
  });
};

export const insertClients = (datatable) => {
  datatable.hashes().forEach((row) => {
    cy.task("DATABASE", {
      dbConfig: config,
      sql: ``,
    });
  });
};

export const insertDataIntoDatabase = (dataTable) => {
  // Obtén los datos del datatable en un formato que puedas utilizar para la inserción
  const dataToInsert = dataTable.hashes()[0]; // Suponiendo que solo haya una fila en el datatable
  dataTable.hashes().forEach((dataToInsert) => {
    // Realiza la inserción en la base de datos utilizando los datos proporcionados
    cy.task("DATABASE", {
      dbConfig: config,
      sql: generateInsertSQL(dataToInsert), // Supongamos que generateInsertSQL() genera la consulta SQL de inserción
    }).then((result) => {
      // Verifica que la inserción se haya realizado correctamente
      if (result.rowCount === 1) {
        cy.log("Inserción exitosa");
      } else {
        cy.log("Error en la inserción");
      }
    });
  });
};
export const selectById = () => {
  cy.task('DATABASE',{
    dbConfig: config,
    sql: getClientForId()
  }).then((response)=>{
    cy.log(`Response ${JSON.stringify(response)}`)
  })
}

  
  export const deleteClient = () => {
    cy.task('DATABASE',{
      dbConfig: config,
      sql: deleteClients()
    })
  }

  export const showClients = () =>{
    cy.task('DATABASE',{
      dbConfig: config,
      sql : getAllClients()
    }).then((response)=>{
      cy.log(`Response ${JSON.stringify(response)}`)
    })
  }