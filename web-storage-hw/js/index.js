const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const list = document.querySelector(".taskList");

let task = JSON.parse(localStorage.getItem("task")) || [];

const renderTasks = () => {
  list.innerHTML = "";
  task.forEach((taskItem, index) => {
    const li = document.createElement("li");
    li.textContent = taskItem.text;
    li.classList.toggle("completed", taskItem.completed);

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = taskItem.completed ? "невиконане" : "виконане";
    toggleBtn.classList.add("toggle-btn");

    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      taskItem.completed = !taskItem.completed;
      saveTasks();
      renderTasks();
    });

    0;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      task.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
};

const saveTasks = () => {
  localStorage.setItem("task", JSON.stringify(task));
};

btn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText !== "") {
    task.push({ text: taskText, completed: false });
    saveTasks();
    renderTasks();
    input.value = "";
  }
});

renderTasks();

//2

const form = document.querySelector(".form");
const input2 = document.querySelector(".input2");
const inputEmail = document.querySelector(".input-email");

const btnSubmit = document.querySelector(".btn-submit");

window.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("name");
  const savedEmail = localStorage.getItem("email");

  if (savedName) {
    input2.value = savedName;
  }
  if (savedEmail) {
    inputEmail.value = savedEmail;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = input2.value.trim();
  const email = inputEmail.value.trim();

  if (name !== "" && email !== "") {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    alert("Дані успішно збережено!");
  } else {
    alert("Будь ласка, заповніть усі поля.");
  }
});

//2.2

const form2 = document.querySelector(".form2");
const inputLogin = document.querySelector(".input-login");
const inputPassword = document.querySelector(".input-password");
const btnLogin = document.querySelector(".loginBtn");
const btnSignin = document.querySelector(".registerBtn");
const message = document.getElementById("message");

btnSignin.addEventListener("click", () => {
  const login = inputLogin.value.trim();
  const password = inputPassword.value.trim();

  if (login !== "" && password !== "") {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.login === login);

    if (userExists) {
      message.textContent = "Користувач з таким логіном вже існує.";
      message.classList.add("error");
    } else {
      users.push({ login, password });
      localStorage.setItem("users", JSON.stringify(users));
      message.textContent = "Користувача успішно зареєстровано!";
      message.classList.remove("error");
    }
  } else {
    message.textContent = "Будь ласка, заповніть усі поля.";
    message.classList.add("error");
  }
});

btnLogin.addEventListener("click", () => {
  const login = inputLogin.value.trim();
  const password = inputPassword.value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.login === login && user.password === password
  );
  if (user) {
    message.textContent = `Вітаємо, ${login}! Ви успішно увійшли.`;
    message.classList.remove("error");
  } else {
    message.textContent = "Невірний логін або пароль.";
    message.classList.add("error");
  }
});

//3

const bookmarkTitle = document.getElementById("bookmarkTitle");
const bookmarkUrl = document.getElementById("bookmarkUrl");
const addBookmarkBtn = document.getElementById("addBookmarkBtn");
const bookmarkList = document.getElementById("bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

const saveBookmarks = () => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

const renderBookmarks = () => {
  bookmarkList.innerHTML = "";

  bookmarks.forEach((bookmark, index) => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = bookmark.url;
    link.textContent = bookmark.title;
    link.target = "_blank"; // Відкривається в новій вкладці

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Редагувати";
    editBtn.addEventListener("click", () => {
      const newTitle = prompt("Нова назва:", bookmark.title);
      const newUrl = prompt("Новий URL:", bookmark.url);
      if (newTitle && newUrl) {
        bookmarks[index] = { title: newTitle, url: newUrl };
        saveBookmarks();
        renderBookmarks();
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", () => {
      bookmarks.splice(index, 1);
      saveBookmarks();
      renderBookmarks();
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(link);
    li.appendChild(actions);

    bookmarkList.appendChild(li);
  });
};

addBookmarkBtn.addEventListener("click", () => {
  const title = bookmarkTitle.value.trim();
  const url = bookmarkUrl.value.trim();

  if (title && url) {
    bookmarks.push({ title, url });
    saveBookmarks();
    renderBookmarks();
    bookmarkTitle.value = "";
    bookmarkUrl.value = "";
  } else {
    alert("Будь ласка, заповніть обидва поля.");
  }
});

renderBookmarks();

//4

const contactForm = document.querySelector(".formContact");
const contactList = document.querySelector("#contactList");
;

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

const saveContacts = () => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
};


const renderContacts = () => {
  if (!contactList) return;
  contactList.innerHTML = "";
  
  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${contact.firstName} ${contact.lastName} - ${contact.phone}, ${contact.email}</span>
      <div class="actions2"></div>
    `;

    const actionsDiv = li.querySelector(".actions2");


    const editBtn = document.createElement("button");
    editBtn.textContent = "Редагувати";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => editContact(index));


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => deleteContact(index));

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);
    li.appendChild(actionsDiv);
    contactList.appendChild(li);
  });
};


contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("surname").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (firstName && lastName && phone && email) {
    contacts.push({ firstName, lastName, phone, email });
    saveContacts();
    renderContacts();
    contactForm.reset();
  } else {
    alert("Будь ласка, заповніть усі поля.");
  }
});

const editContact = (index) => {
  const contact = contacts[index];

  const newFirstName = prompt("Нове ім'я:", contact.firstName);
  const newLastName = prompt("Нове прізвище:", contact.lastName);
  const newPhone = prompt("Новий телефон:", contact.phone);
  const newEmail = prompt("Нова електронна пошта:", contact.email);

  if (newFirstName && newLastName && newPhone && newEmail) {
    contacts[index] = {
      firstName: newFirstName,
      lastName: newLastName,
      phone: newPhone,
      email: newEmail
    };
    saveContacts();
    renderContacts();
  }
};

const deleteContact = (index) => {
  if (confirm("Ви дійсно хочете видалити цей контакт?")) {
    contacts.splice(index, 1);
    saveContacts();
    renderContacts();
  }
};

document.addEventListener("DOMContentLoaded", renderContacts);
