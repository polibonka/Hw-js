//? старое дз

// //1

// fetch("http://localhost:3000/movies")
//   .then((response) => response.json())

//   .then((movies) => console.log(movies))

//   .catch((err) => console.error(err));

// //2

// const movieToAdd = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   releaseYear: 2010,
//   genre: "Action, Adventure, Crime, Mystery, Thriller",
// };

// const optionsToAddMovie = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(movieToAdd),
// };

// fetch("http://localhost:3000/movies", optionsToAddMovie)
//   .then((res) => res.json())
//   .then((movies) => console.log(movies))
//   .catch((err) => console.error(err));


  
// const movieToUpdate = {
//     id: 1,
//     title: "Inception: The Final Chapter",
//     director: "Christopher Nolan",
//     releaseYear: 2019,
//     genre: "Action, Adventure, Crime, Mystery, Thriller",
//   };
  
//   const optionsToUpdateMovie = {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(movieToUpdate),
//   };
  
//   fetch(`http://localhost:3000/movies/${movieToUpdate.id}`, optionsToUpdateMovie)
//     .then((res) => res.json())
//     .then((updatedMovie) => {
//       console.log("Movie updated:", updatedMovie);
//     })
//     .catch((err) => {
//       console.error("Error updating movie:", err);
//     });
  
//     const movieToUpdate2 = {
//         id: 2,
//         title: "Inception",
//         director: "Christopher Nolan",
//         releaseYear: 2010,
//         genre: "Action, Adventure, Crime, Mystery, Thriller",
//       };

//       const optionsMovieUpdate = {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(movieToUpdate2),
//       }
    
//       fetch(`http://localhost:3000/movies/${movieToUpdate2.id}`, optionsMovieUpdate)
//         .then((res) => res.json())
//         .then((updatedMovie) => {
//           console.log("Movie updated:", updatedMovie);
//         })
//         .catch((err) => {
//           console.error("Error updating movie:", err);
//         });


//   fetch('http://localhost:3000/movies/3', {method: "DELETE"})
  
//   .then((res) => res.json())
//   .then((updatedMovie) => {
//     console.log("Movie updated:", updatedMovie);
//   })
//   .catch((err) => {
//     console.error("Error updating movie:", err);
//   });
  
const getStudents = document.getElementById('getStudents');

getStudents.addEventListener('click', () => {
    fetch('http://localhost:3000/students')
    .then(response => response.json())
    .then((data) => {
        students = data; 
      })
    .catch(error => console.error('Error:', error));
})



// 10 Форма для фільмів

const form = document.getElementById('movieForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const releaseYear = document.getElementById('releaseYear').value;
    const genre = document.getElementById('genre').value;

    const newMovie = { title, director, releaseYear, genre };
    console.log("New movie object:", newMovie);

    fetch('http://localhost:3000/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
    })
   .then(response => response.json())
   .then((data) => {
        console.log('Movie added:', data);
        form.reset();
    })
   .catch(error => console.error('Error:', error));
});


