//category table
const createCategoryTable = (connection) => {
    const query = `
        CREATE TABLE IF NOT EXISTS category (
            id INT AUTO_INCREMENT PRIMARY KEY,
            categoryName VARCHAR(255) NOT NULL
        )
    `;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error creating category table:', err);
            process.exit(1);
        }
        console.log('Category table created successfully');
    });
};

module.exports = createCategoryTable;
