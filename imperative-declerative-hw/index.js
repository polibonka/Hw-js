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

// map - змінює 

const calculateTotalBalance = (users2) => {
  return users2.reduce((acc, user) => acc + user.balance, 0)
};
console.log(calculateTotalBalance(user2)); 
//8


const getUsersWithFriend = (users, friendName) => {
    return users.find((user2) => user2.friend === friendName)
  };

  console.log(getUsersWithFriend(user2, 'Briana Decker'));
  console.log(getUsersWithFriend(user2, 'Goldie Gentry'));   

  //9

  const user2 = [
    {username: 'Moore Hensley',
        gender: 'male',
        isActive: true,
        email: 'moorehensley@gmail.com',
        age: 37,
        balance: 2500,
        friend:'Ross Vazquez',
        friends: 2,
        skills:  'hiking'
    },
     {username: 'Sharlene Bush',
     gender: 'male',
     isActive: true,
     age: 35,
     balance: 2000,
     friend: 'Briana Decker',
     friends: 4,
     skills: 'climbing',
  
     },
      {username: 'Ross Vazquez',
       gender: 'female',
       isActive: false,
       age: 22,
       balance: 3000,
       friend: 'Sheree Anthony' ,
       friends: 3,
       skills: 'swimming',
  
  
      }, 
      {username: 'Elma Head',
       gender: 'female',
       isActive: false,
       email:'elmahead@omatom.com',
       age: 25,
       balance: 2000,
       friend: 'Goldie Gentry',
       friends: 5,
       skills: 'tennis'
  
      }
  ];

user2.sort((a,b) => a.friends - b.friends)
console.log(user2);

// 10

const getSortedUniqueSkills = users => {
  const allSkills = users.reduce((acc, user) => acc.concat(user.skills), [])
const uniqeSkills = allSkills.filter((skill, index, self) => {
  return self.indexOf(skill) === index
})

const sorted = uniqeSkills.sort()
return sorted
}
console.log(getSortedUniqueSkills(user2));

user2.sort((a,b) => a.skills.localeCompare(b.skills))
console.log(user2);