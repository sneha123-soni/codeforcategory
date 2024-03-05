const createServiceTable = (connection) => {
    const query = `
        CREATE TABLE IF NOT EXISTS service (
            id INT AUTO_INCREMENT PRIMARY KEY,
            categoryId INT NOT NULL,
            serviceName VARCHAR(255) NOT NULL,
            type ENUM('Normal', 'VIP') NOT NULL,
            priceOptions JSON,
            FOREIGN KEY (categoryId) REFERENCES category(id)
        )
    `;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error creating service table:', err);
            process.exit(1);
        }
        console.log('Service table created successfully');
    });
};

module.exports = createServiceTable;
