"use strict";

//1

const user = {
  hobby: "art",
  premium: true,
};

// user.push("mood: happy");
console.log(user);

// user.splice();

// Короче если не получанться сделать задание не растраивайся в принципе можно загуглить термин которий ти не знаешь как сделать или спросить у chatgpt як це зробити - запистаи це (як це він зробив, якій він термін викоритовував а потім можно або перепистати це або попросити його зробити таке ж завдання але трішки різне щоб попрактивуватися (якщо він зможе ну я думаю він зможе) саме головне запам'ятай це та попрактикуй це, та не переживай)))

// Еще как вариант можно пересматривать видео с урока чтоб лучще понять поту что когда я смотрю записи я лучше понимаю материал))

// Главное не здавайся !!!

const users = Object.keys(user);

for (let keys of users) {
  console.log(keys);
  console.log(users[keys]);
}

//2

const countProps = (obj) => {
  // Як можна порахувати кількість властивостей?
  // Напаевно модна так: length, for of через length мабуть, for

  const properties = {
    property1: "house",
    property2: "car",
  };
  for (let i = 0; i < properties.length; i++) {
    const sum = properties[i];
  }
  //   for (let count of properties.length) {
  //     console.log(count);
  //     console.log(properties.length[count]);
  //   }
  return properties;
};
console.log(countProps);

// 3

// Як можна зробити це завдання?
// 1. можна написати об'єкт з їніми властивостями та виполнених задач
//2. Можна зробити if де буде написано наприкалад  employee > 10 {
// consol
//}else{

// }

const findBestEmployee = (employees) => {
  const employee = {
    worker1: 5,
    worker2: 8,
    worker3: 11,
  };
  if (employee > 10) {
    console.log(employee);
  }
};

console.log(findBestEmployee);
