const students = [
  { name: "harry", subject: "Javascript" },
  { name: "Rohan", subject: "Machine Learning" },
];

function enrollStudent(student) {
  setTimeout(function () {
    students.push(student);
  }, 1000);
}
// Modification 1
