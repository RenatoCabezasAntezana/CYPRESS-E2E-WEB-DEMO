export const saveToken = (token) => {
    return `insert into token.values('${token}')`
}

export const getToken = (token) => {
    return `select * from token where token ='${token}'`
}

//Mostrar los registros de la base de datos cypress


export const getClients = () => {
    return `select * from clients`
}