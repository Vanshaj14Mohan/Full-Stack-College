// Function to fetch the student records from the JSON file using AJAX
function fetchStudentRecords() {
    // Create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Set the request method and URL
    xhr.open('GET', 'student.json', true);

    // Set the response type to JSON
    xhr.responseType = 'json';

    // Add an event listener to the load event
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Get the JSON data
            const students = xhr.response;

            // Create a string to hold the HTML
            let html = '<table>';
            html += '<tr><th>First Name</th><th>Last Name</th><th>Course</th><th>Address</th><th>Phone No</th><th>Email ID</th></tr>';

            // Loop through the student records and create HTML elements
            students.forEach((student) => {
                html += `
                    <tr>
                        <td>${student.firstName}</td>
                        <td>${student.lastName}</td>
                        <td>${student.course}</td>
                        <td>${student.address.city}, ${student.address.state} ${student.address.postalCode}</td>
                        <td>${student.phoneNo}</td>
                        <td>${student.emailId}</td>
                    </tr>
                `;
            });

            html += '</table>';

            // Set the HTML of the container element
            document.getElementById('student-records').innerHTML = html;
        } else {
            console.error('Error fetching student records:', xhr.statusText);
        }
    };

    // Send the request
    xhr.send();
}

// Call the function to fetch the student records
fetchStudentRecords();