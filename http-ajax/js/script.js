
//! AJAX - це підхід який дозволяє обмінюватися даними між клієнтами і серверами без перезавантаження сторінки

//! fetch - це функція яка використовується для виконання HTTP-запитів на сервер

fetch("https://jsonplaceholder.typicode.com/users")

//? response.json() - метод який перетворює відповідь сервера в об'єкт Javascript
  .then((response) => response.text())
  .then((users) => console.log(users))
  .catch((err) => console.log(err));

  fetch("https://jsonplaceholder.typicode.com/users")
  //? response.blob() -  метод який парсить дані що описють файл (зображення, текстовий документ, аудіо )
  .then((response) => response.blob())
  .then((users) => console.log(users))
  .catch((err) => console.log(err));
  


  
  //? fetch - приймає в себе 2 аргументи - URL  і об'єкт параметрів
  const optionsFav = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTE0NGQyY2Q3MWViNTQzM2Y1NWU3M2VhZGRhYTE2YyIsIm5iZiI6MTczNTIzOTUyNy4zMDcwMDAyLCJzdWIiOiI2NzZkYTc2Nzc2OTg1MmYyOTAxMjkxYmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UJ4DjXXoQNe5b09HRR9cPPQ0akolddM4nkV76heFIvE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/account/21711264/lists?page=1', optionsFav)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

    .then(response => response.json())
    .then(users => {
        users.forEach((user) => {
            const item = document.createElement('li')
            item.innerHTML = `<h2>${user.name}</h2> <br> <p>${user.email}</p> <br> <p>${user.address.street}</p> <br> <p>${user.address}</p>`
            listUsers.appendChild(item)
        })
    })
    .catch(err => console.error(err))


    //! Помилка новочка

    let globalVariable; // undefined

// Initializing data fetching
fetch("https://jsonplaceholder.typicode.com/users")
 .then(response => response.json())
 .then(users => {
   console.log("users inside then callback: ", users);

   // Writing the result to a global variable
   globalVariable = users;

   // Everything is ok here, the data is in the variable
   console.log("globalVariable inside fetch callback: ", globalVariable);
 });

 console.log('Результат після fetch в глобальні області видимості ', globalVariable);

 ////!!! результат виконання асинхронного коду завжди завантажуються в самому кінці коду, тобто після всього синхронного коду

 //? Параметри рядка запиту 

//? Клкас URLSearchParams - це клас, який дозволяє надавати параметри в рядку запиту

const params = new URLSearchParams({
  _start: 10,
  _limit: 20,
  _sort: 'name'
});

console.log(params.toString());


 fetch('https://jsonplaceholder.typicode.com/comments?_start=10&_limit=20&_sort=name' * params.toString())
 .then(response => response.json())
 .then(comments => {
    console.log('Коментарі: ', comments);
  })
 .catch(error => console.error('Error:', error));
 

 //? HTTp-заголовки 

 const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTE0NGQyY2Q3MWViNTQzM2Y1NWU3M2VhZGRhYTE2YyIsIm5iZiI6MTczNTIzOTUyNy4zMDcwMDAyLCJzdWIiOiI2NzZkYTc2Nzc2OTg1MmYyOTAxMjkxYmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UJ4DjXXoQNe5b09HRR9cPPQ0akolddM4nkV76heFIvE'
  });

  headers.set('Content-Type', 'application/json')

   fetch('https://api.themoviedb.org/3/movie/550?api_key=YOUR_API_KEY', { headers: headers })
 .then(response => response.json())
 .then(movie => {
    console.log('Фільм: ', movie);
  })
  .catch(error => console.error('Error:', error));


  //? Axios 

  // імпорти робляться вгорі

