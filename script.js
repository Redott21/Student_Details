// Sample student data for demonstration
const students = [
  { rollNumber: '1', name: 'Rohit Tyagi', age: 19, Branch: 'CSE 3rd Yr', Contact: 7599439201, College:'Suresh Deep Polytechnic' },
  { rollNumber: '2', name: 'Abdul Rhaeem', age: 18, Branch: 'CSE 3rd Yr', Contact: 9310020180, College:'Suresh Deep Polytechnic' },
  { rollNumber: '3', name: 'Aman Chand', age: 22, Branch: 'CSE 3rd Yr', Contact: 7060287123, College:'Suresh Deep Polytechnic' },
  { rollNumber: '4', name: 'Ayesha Choduhary', age: 18, Branch: 'CSE 3rd Yr', Contact: 9643736786, College:'Suresh Deep Polytechnic' },
  { rollNumber: '5', name: 'Deeksha Pundir', age: 18, Branch: 'CSE 3rd Yr', Contact: 7500885445,College: 'Suresh Deep Polytechnic' },
  { rollNumber: '6', name: 'Deepak Kumar', age: 20, Branch: 'CSE 3rd Yr', Contact: 9711061877, College:'Suresh Deep Polytechnic'},
  { rollNumber: '7', name: 'Deepak Kumar Gupta', age: 22, Branch: 'CSE 3rd Yr', Contact: 9599498653, College:'Suresh Deep Polytechnic'},
  { rollNumber: '8', name: 'Garv Kumar Deshwal', age: 18, Branch: 'CSE 3rd Yr', Contact: 9818485862,College: 'Suresh Deep Polytechnic'},
  { rollNumber: '9', name: 'Komal Kumari', age: 20, Branch: 'CSE 3rd Yr', Contact: 8076353743, College:'Suresh Deep Polytechnic'},
  { rollNumber: '10', name: 'Nikhil Rai', age: 18, Branch: 'CSE 3rd Yr', Contact: 8513912133, College:'Suresh Deep Polytechnic'},
  { rollNumber: '11', name: 'Rishi Sharma', age: 18, Branch: 'CSE 3rd Yr', Contact: 7827100395, College:'Suresh Deep Polytechnic'},
  { rollNumber: '12', name: 'Sonali Mandal', age: 20, Branch: 'CSE 3rd Yr', Contact: 8449440651, College:'Suresh Deep Polytechnic'},
  { rollNumber: '13', name: 'Tasleem Raza', age: 18, Branch: 'CSE 3rd Yr', Contact: 6394132972, College:'Suresh Deep Polytechnic'},
  { rollNumber: '14', name: 'Priyam Mittal', age: 18, Branch: 'CSE 3rd Yr', Contact: 9012328463, College:'Suresh Deep Polytechnic'},
];

// Function to handle form submission
document.getElementById('studentForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get input values
  const rollNumber = document.getElementById('rollNumber').value.trim();
  const studentName = document.getElementById('studentName').value.trim().toLowerCase();

  // Search for the student
  const student = students.find(
    (s) => s.rollNumber === rollNumber && s.name.toLowerCase() === studentName
  );

  // Display the result
  const resultBox = document.getElementById('result');
  if (student) {
    resultBox.innerHTML = `
      <h3>Student Found:</h3>
      <p><strong>Name:</strong> ${student.name}</p>
      <p><strong>Roll Number:</strong> ${student.rollNumber}</p>
      <p><strong>Age:</strong> ${student.age}</p>
      <p><strong>Branch:</strong> ${student.Branch}</p>
      <p><strong>College:</strong>${student.College}</p>
      <p><strong>Phone No:</strong> ${student.Contact}</p>
    `;
  } else {
    resultBox.innerHTML = `<h3>No student found with the provided details.</h3>`;
  }

  // Add fade-in effect
  resultBox.style.opacity = 0;
  setTimeout(() => {
    resultBox.style.transition = 'opacity 1s';
    resultBox.style.opacity = 1;
  }, 0);
});
