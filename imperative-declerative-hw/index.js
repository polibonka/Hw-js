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
        age: 37,
        balance: 2500
    },
     {username: 'Sharlene Bush',
     gender: 'male',
     isActive: true,
     age: 35,
     balance: 2000
     },
      {username: 'Ross Vazquez',
       gender: 'female',
       isActive: false,
       age: 22,
       balance: 3000
      }, 
      {username: 'Elma Head',
       gender: 'female',
       isActive: false,
       email:'elmahead@omatom.com',
       age: 25,
       balance: 2000,
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

//7  
const calculateTotalBalance = users2 => {
  return users.reduce((acc, user) => acc + user.balance, 0)
};
console.log(calculateTotalBalance(users2)); 
//8

const user2 = [
    {username: 'Moore Hensley',
        gender: 'male',
        isActive: true,
        email: 'moorehensley@gmail.com',
        age: 37,
        balance: 2500,
        friend:'Ross Vazquez',
    },
     {username: 'Sharlene Bush',
     gender: 'male',
     isActive: true,
     age: 35,
     balance: 2000,
     friend: 'Briana Decker',
     },
      {username: 'Ross Vazquez',
       gender: 'female',
       isActive: false,
       age: 22,
       balance: 3000,
       friend: 'Sheree Anthony' ,

      }, 
      {username: 'Elma Head',
       gender: 'female',
       isActive: false,
       email:'elmahead@omatom.com',
       age: 25,
       balance: 2000,
       friend: 'Goldie Gentry',
      }
];

const getUsersWithFriend = (users, friendName) => {
    return users.find((user2) => user2.friend === friendName)
  };

  console.log(getUsersWithFriend(user2, 'Briana Decker'));
  console.log(getUsersWithFriend(user2, 'Goldie Gentry'));   

