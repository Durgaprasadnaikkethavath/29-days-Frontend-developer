const students = [
  {
    id: 1,
    name: "Durga",
    attendance: "89",
    feedback: "Excellent",
  },
  {
    id: 2,
    name: " Ram",
    attendance: "90",
    feedback: "Very Good",
  },
  {
    id: 1,
    name: "malli",
    attendance: "80",
    feedback: "Very Nice",
  },
  // {
  //   id: 1,
  //   name: "Durga",
  //   attendance: "89%",
  //   feedback: "Excellent",
  // },
];

// console.log();
// students();

const displayStudents = () => {
  const studentInfoTable = document.getElementById("studentInfoTable");
  students.map((student) => {
    console.log(student.name);

    let row = document.createElement("tr");
    row.innerHTML = `<td>${student.id}</td><td>${student.name}</td><td>${student.attendance}</td><td>${student.feedback}</td>`;
    studentInfoBody.appendChild(row);
  });
};

const addStudent = (id, name, attendance, feedback) => {
  let studentData = students.push({ id, name, attendance, feedback });
};

addStudent(4, "krishna", 93, "Very Good");
addStudent(5, " naik", 78, "Very Nice");
addStudent(6, "sivakumar", 77, "Good");
// addStudent()
// addStudent()
// addStudent()
displayStudents();
