const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const age = document.querySelector("#age");
const subject = document.querySelector("#subject");
const listStudents = document.querySelector("#studentList");

let students = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newStudents = {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    subject: subject.value,
  };
  students.push(newStudents);
  localStorage.setItem("student", JSON.stringify(students) )
 randomStudents()
  form.reset();
});

const randomStudents = () => {
    listStudents.innerHTML = "";
   
  students.forEach((student, index) => {
    const li = document.createElement("li");
    li.id = index
    li.innerHTML = `${student.firstName} ${student.lastName} ${student.age} ${student.subject} <br> <button class="btn-delete">Delete</button> <button class="btn-edit">Edit</button>`;
    listStudents.appendChild(li);  
});
};
const storageStudents = localStorage.getItem("student")
if(storageStudents){
  students = JSON.parse(storageStudents)
  randomStudents();
}
listStudents.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn-delete")){
       const index =  e.target.parentNode.id
       console.log(students);

       
        students.splice(index, 1)
        randomStudents()
    }

})

listStudents.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn-edit")){
       const index =  e.target.parentNode.id
       const student = students[index];

       firstName.value = student.firstName;
       lastName.value = student.lastName;
       age.value = student.age;
       subject.value = student.subject;
       
       editIndex = index;
    }

})
