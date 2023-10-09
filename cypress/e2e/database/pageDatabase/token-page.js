import{saveToken,getToken, getClients} from "../../database/querys/toquen-querys"
import config from "../../database/config"

export let token = "";

export const saveToken = () => {
    cy.get("@endpoint").then((response)=>{
        token = response.body.token;
        cy.task("DATABASE",{
            dbConfig: config,
            sql: saveToken(token)
        })
    })
}

export const validateTokenDB = () => {
    cy.get("@endpoint").then((response)=>{
        token = response.body.token
        cy.task("DATABASE",{
            dbConfig: config,
            sql: getToken(token),
        }).then((result) => {
            cy.log(result.rows)
            result.rows.forEach((row) => {
                cy.log(JSON.stringify(row))
            })
        })
    })
}


export const mostrarDatos = () => {
        cy.task("DATABASE",{
            dbConfig: config,
            sql: getClients(),
        }).then((result) => {
            cy.log(result.rows)
            result.rows.forEach((row) => {
                cy.log(JSON.stringify(row))
            })
        })
}