"use strict";

//1

const names = [{username: 'Moore Hensley'}, {username: 'Sharlene Bush'}, {username: 'Ross Vazquez'}, {username: 'Elma Head'},  ];

const getNames= names.map((username) => username.username);
console.log(getNames);

//2

const users = [
    {username: 'Moore Hensley',
        color: 'green'
    },
     {username: 'Sharlene Bush',
        color: 'blue'
     },
      {username: 'Ross Vazquez',
        color: 'brown'
      }, 
      {username: 'Elma Head',
        color: 'blue',
      }
];

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.color === color)
  };

  console.log(getUsersWithEyeColor(users, 'blue'));

  //3

  const user = [
    {username: 'Moore Hensley',
        gender: 'male',
        isActive: true,
        email: 'moorehensley@gmail.com',
        age: 37
    },
     {username: 'Sharlene Bush',
     gender: 'male',
     isActive: true,
     age: 35
     },
      {username: 'Ross Vazquez',
       gender: 'female',
       isActive: false,
       age: 22,
      }, 
      {username: 'Elma Head',
       gender: 'female',
       isActive: false,
       email:'elmahead@omatom.com',
       age: 25,
      }
];

const getUsersWithGender = (users, gender) => {
   return users.filter((user) => user.gender === gender )
  };  

  console.log(getUsersWithGender(user, 'male'));

  //4

  const getInactiveUsers = users => {
   return users.filter((user) => !user.isActive)
  };

  console.log(getInactiveUsers(user));

  //5 

  const getUserWithEmail = (users, email) => {
    return users.find((user) => user.email === email)
  };

  console.log(getUserWithEmail(user, 'moorehensley@gmail.com'));
  console.log(getUserWithEmail(user, 'elmahead@omatom.com'));


  //6

  const getUsersWithAge = (users, min, max) => {
    return users.filter((user) => user.age >= min && user.age <= max)
  };

  console.log(getUsersWithAge(user, 20, 30));  

  console.log(getUsersWithAge(user, 30, 40));

