// Create a JavaScript object containing the records of 5 students
const students = [
    {
        firstName: "Sam",
        lastName: "John",
        course: "BCA",
        address: {
            city: "New Jersey",
            state: "NY",
            postalCode: "112345"
        },
        phoneNo: "123456789",
        emailId: "sam.john@example.com"
    },
    {
        firstName: "Aman",
        lastName: "Sethi",
        course: "MCA",
        address: {
            city: "Los Angeles",
            state: "CA",
            postalCode: "823001"
        },
        phoneNo: "123-456-789",
        emailId: "aman.sethi@example.com"
    },
    {
        firstName: "Ajay",
        lastName: "Singh",
        course: "Mechanical Engineering",
        address: {
            city: "Chicago",
            state: "IL",
            postalCode: "60001"
        },
        phoneNo: "555-123-4567",
        emailId: "bob.johnson@example.com"
    },
    {
        firstName: "Alice",
        lastName: "Williams",
        course: "BSc Biology",
        address: {
            city: "Houston",
            state: "TX",
            postalCode: "77001"
        },
        phoneNo: "901-234-5678",
        emailId: "alice.williams@example.com"
    },
    {
        firstName: "Mike",
        lastName: "Davis",
        course: "BA Business Administration",
        address: {
            city: "Philadelphia",
            state: "PA",
            postalCode: "19001"
        },
        phoneNo: "111-222-3333",
        emailId: "mike.davis@example.com"
    }
];

// Function to display the student records in HTML
function displayStudentRecords() {
    // Get the container element
    const container = document.getElementById('student-records');

    // Create a string to hold the HTML
    let html = '';

    // Loop through the student records and create HTML elements
    students.forEach((student, index) => {
        html += `
            <h2>Student ${index + 1}</h2>
            <p>First Name: ${student.firstName}</p>
            <p>Last Name: ${student.lastName}</p>
            <p>Course: ${student.course}</p>
            <p>Address:</p>
            <p>&nbsp;&nbsp;City: ${student.address.city}</p>
            <p>&nbsp;&nbsp;State: ${student.address.state}</p>
            <p>&nbsp;&nbsp;Postal Code: ${student.address.postalCode}</p>
            <p>Phone No: ${student.phoneNo}</p>
            <p>Email ID: ${student.emailId}</p>
            <hr>
        `;
    });

    // Set the HTML of the container element
    container.innerHTML = html;
}

// Call the function to display the student records
displayStudentRecords();