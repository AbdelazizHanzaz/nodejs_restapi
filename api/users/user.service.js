const pool = require("../../config/db");


module.exports = {
    create : (data, callback)=>{
        pool.query(
            "insert into Registration (firstName, lastName, email, password)",
            [
                
            ],
            (error, result, fields)=>{
                if(error) callback(error)
                callback(result)
            }

        );
    }
}