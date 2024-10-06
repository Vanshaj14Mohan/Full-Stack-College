const con = require('./connection');

// Create the student table if it doesn't exist
con.query(`CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255),
  PRIMARY KEY (id)
)`, (err, result) => {
  if (err) {
    console.error('Error creating table:', err);
    return;
  }
  console.log('Table created successfully');
});

// Insert some sample data into the student table
con.query(`INSERT INTO students (name, email) VALUES ('John Doe', 'john@example.com'), ('Jane Doe', 'jane@example.com')`, (err, result) => {
  if (err) {
    console.error('Error inserting data:', err);
    return;
  }
  console.log('Data inserted successfully');
});

// Read data from the student table
con.query(`SELECT * FROM students`, (err, result) => {
  if (err) {
    console.error('Error reading data:', err);
    return;
  }
  const students = result;
  console.log('Students:', students);

  // Display the records in an HTML table
  const html = `
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      ${students.map((student) => `
        <tr>
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.email}</td>
        </tr>
      `).join('')}
    </table>
  `;
  console.log(html);
});