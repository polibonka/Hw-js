import axios from 'axios';


//? axios
  axios.get("https://jsonplaceholder.typicode.com/users")

  // тут не потрібно писати response then він сам це робить

  .then((users) => console.log(users))
  .catch((error) => console.error("Error:", error));

  //додаємо дані 
  const newComment = {
    title: "new comment",
    body: "New comment body"
  }

  axios.post('https://jsonplaceholder.typicode.com/users', newComment)

  .then((users) => console.log('Комент був упішно додан', users))
