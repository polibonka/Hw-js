//?новое дз


// const addStudents = async () => {
//   try {
//     const student = {
//       name: "John Doe",
//       age: 25,
//       course: "Digital communications",
//       skills: ["Business managment", "Marketing", "Finance"],
//       email: "john.doe@example.com",
//       isEnrolled: true,
//     };
//     const studentsAdd = await fetch("http://localhost:3000/students", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(student),
//     });
//     console.log(studentsAdd);
//   } catch (error) {
//     console.error(error);
//   }
// };

// addStudents();

// const updateStudents = async (id) => {
//   try {
//     const student = {
//       name: "John Doeee",
//       age: 26,
//       course: "Digital Marketing",
//       skills: ["Business managment", "Marketing", "Finance"],
//       email: "john.doeee@example.com",
//       isEnrolled: true,
//     };
//     const studentsUpdate = await fetch(`http://localhost:3000/students/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(student),
//     });
//     console.log(studentsUpdate);
//   } catch (error) {
//     console.error(error);
//   }
// };

// updateStudents(1);

// const deleteStudents = async (id) => {
//   try {
//     const studentsDelete = await fetch(`http://localhost:3000/students/${id}`, {
//       method: "DELETE",
//     });
//     console.log(studentsDelete);
//   } catch (error) {
//     console.error(error);
//   }
// };

// deleteStudents(2);

const getStudentsBtn = document.getElementById("get-students-btn");
const studentList = document.getElementById("students-list");
const studentForm = document.getElementById("add-student-form");
const studentName = document.querySelector("#name");
const studentAge = document.querySelector("#age");
const studentCourse = document.querySelector("#course");
const studentSkills = document.querySelector("#skills");
const studentEmail = document.querySelector("#email");
const studentEnrolled = document.querySelector("#isEnrolled");

const getStudents = async () => {
  try {
    const response = await fetch("http://localhost:3000/students");
    if (!response.ok) {
      throw new Error("Error fetching students");
    }
    const students = await response.json();
    renderStudents(students);
  } catch (error) {
    console.error(error);
  }
};

getStudentsBtn.addEventListener("click", getStudents);

const updateStudent = async (id) => {
  const card = document.querySelector(`.card[data-id='${id}']`);
  const inputs = card.querySelectorAll(".edit-input");
  let updatedData = {};

  inputs.forEach((input) => {
    updatedData[input.dataset.type] = input.value;
  });
  try {
    const response = await fetch(`http://localhost:3000/students/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error("Помилка при оновленні студента");
    }

    getStudents();
  } catch (error) {
    console.error(error);
  }
};

const deleteStudent = async (id) => {
  if (!confirm("Ви впевнені, що хочете видалити цього студента?")) return;
  try {
    const response = await fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Помилка при видаленні студента");
    }
    getStudents();
  } catch (error) {
    console.error(error);
  }
};

const renderStudents = (students) => {
  studentList.innerHTML = "";
  students.forEach((student) => {
    const studentCard = document.createElement("div");
    studentCard.classList.add("card", "p-2");
    studentCard.dataset.id = student.id;

    studentCard.innerHTML = `
            <div class="info-box card-body">
              <h2 class="card-title">${student.name}</h2>
              <strong>Age:</strong> ${
                student.age ? student.age : "No age"
              } years old <br>
              <strong>Course:</strong> ${student.course} <br>
              <strong>Skills:</strong> ${student.skills} <br>
              <strong>Email:</strong> ${
                student.email ? student.email : "No email"
              } <br>
              <strong>Login:</strong> ${student.isEnrolled} <br>
            </div>

            <div class="edit-box card-body d-none">
              <input data-type="name" value="${
                student.name
              }" class="h2 card-title edit-input"/> <br>
              <input data-type="age" value="${
                student.age ? student.age : "No age"
              }" class="card-text edit-input"> <br>
              <input data-type="course" value="${
                student.course
              }" class="card-text edit-input"> <br>
              <input data-type="skills" value="${
                student.skills
              }" class="card-text edit-input"> <br>
              <input data-type="email" value="${
                student.email ? student.email : "No email"
              }" class="card-text edit-input"> <br>
              <input data-type="isEnrolled" value="${
                student.isEnrolled
              }" class="card-text edit-input"> <br>
            </div>

            <br/>
            <button class="btn delete btn-danger">DELETE</button>
            <button class="btn change btn-warning btn-change d-none">CHANGE</button>
            <button class="btn edit btn-info">EDIT</button>
        `;
    const editBtn = studentCard.querySelector(".edit");
    const deleteBtn = studentCard.querySelector(".delete");
    const changeBtn = studentCard.querySelector(".change");
    const infoBox = studentCard.querySelector(".info-box");
    const editBox = studentCard.querySelector(".edit-box");

    editBtn.addEventListener("click", () => {
      infoBox.classList.toggle("d-none");
      editBox.classList.toggle("d-none");
      changeBtn.classList.toggle("d-none");
    });
    deleteBtn.addEventListener("click", () => deleteStudent(student.id));
    changeBtn.addEventListener("click", () => updateStudent(student.id));
    studentList.appendChild(studentCard);
  });
};

studentForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newStudent = {
    name: studentName.value,
    age: studentAge.value,
    email: studentEmail.value,
    course: studentCourse.value,
    skills: studentSkills.value.split(",").map((skill) => skill.trim()),
    isEnrolled: studentEnrolled.checked,
  };
  try {
    const addStudent = fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });
    getStudents();
  } catch (error) {
    console.error(error);
  }
});
