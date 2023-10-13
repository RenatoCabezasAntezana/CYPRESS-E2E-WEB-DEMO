//Mostrar los registros de la base de datos cypress
export const getClients = () => {
    return 'select * from clients order by id_client desc limit 2'
    
}

export const getAllClients = () => {
    return `select * from clients`
}


export const validateDB = () =>{
    return 'SELECT current_database()'          //Se va a verificar en que base de datos estamos conectados
}

export const validateSelectDB = () =>{
    return 'select count(*) FROM clients'
}

// export const setClients = (datatable) => {
//     datatable.hashes().forEach(row => {
//         console.log(row.address)
//         return `insert into clients (name,lastname,email,address,phone) values (${row.name},${row.lastname},${row.email},${row.address},${row.phone})`
//     });
// }

export const generateInsertSQL = (data) =>{
    
    // if (!data.name || !data.lastname || !data.email || !data.address || !data.phone) {
    //     throw new Error('Faltan campos obligatorios para la inserción.');
    //   }
    
      // Genera la consulta SQL de inserción
      const sql = `INSERT INTO clients (name, lastname, email, address, phone)
        VALUES ('${data.name}', '${data.lastname}', '${data.email}', '${data.address}','${data.phone}')
      `;
    
      return sql;
}

export const getClientForId = () =>{
    return "SELECT * FROM clients WHERE id_client = (SELECT max(id_client) FROM clients);"
} 

export const deleteClients = () => {
    return `DELETE FROM clients WHERE id_client IN 
                (SELECT id_client
                    FROM clients
                    ORDER BY id_client DESC
                    LIMIT 2
                );`
}