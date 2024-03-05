const mysql = require("mysql2");

const connectDb = () => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            process.exit(1);
        }
        console.log('Connected to database successfully');
    });

    return connection;
};

module.exports = connectDb;
